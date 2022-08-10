import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com'
});

export const getGithubProfile = async (username) => {
    try {
        const userData = await api.get(`/users/${username}`)
        return userData.data
    } catch (err) {
        return null
    }
}