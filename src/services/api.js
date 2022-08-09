import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com'
});

export const getGithubProfile = async (username) => {
    try {
        const userData = await api.get(`/users/${username}`).userData.data
        const userRepoData = await api.get(userData.repos_url)
        return { userData, userRepoData }
    } catch (err) {
        console.log(err)
        return null
    }
}