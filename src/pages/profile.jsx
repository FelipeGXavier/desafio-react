import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Repositories } from "../containers/repositories";
import { UserInfo } from "../containers/user-info";
import { getGithubProfile, getReposFromUser } from "../services/api";
import styled from "styled-components";

const StyledProfileContainer = styled.div`
  display: flex;
`;

export const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await getGithubProfile(username);

      if (response == null) {
        navigate("/", { state: { message: "Usuário não encontrado" } });
        return;
      }

      const {
        avatar_url,
        name,
        login,
        company,
        location,
        public_repos,
        followers,
        following,
        twitter_username,
        bio,
        email,
        blog,
      } = response;

      const formattedResponse = {
        photoSrc: avatar_url,
        userName: name,
        userLogin: login,
        organization: company,
        localization: location,
        repos: public_repos,
        followers: followers,
        following: following,
        twitter: twitter_username,
        bio: bio,
        email: email,
        blog: blog,
      };

      setUserProfile(formattedResponse);
    };

    const fetchUserRepos = async () => {
      const response = await getReposFromUser(username);
      const formattedResponse = [];
      console.log(response);
      response.map((item) => {
        const { name, description, html_url, stargazers_count, updated_at } =
          item;
        return formattedResponse.push({
          repositoryName: name,
          repositoryLink: html_url,
          description: description,
          lastUpdate: updated_at,
          stars: stargazers_count,
        });
      });
      setUserRepos(formattedResponse);
    };
    fetchUserProfile();
    fetchUserRepos();
  }, [username, navigate]);
  return (
    <StyledProfileContainer>
      {userProfile != null && (
        <UserInfo
          followers={userProfile.followers}
          repositories={userProfile.repos}
          localization={userProfile.localization}
          organization={userProfile.organization}
          userLogin={userProfile.userLogin}
          userName={userProfile.userName}
          photoSrc={userProfile.photoSrc}
          following={userProfile.following}
          twitter={userProfile.twitter}
          bio={userProfile.bio}
          email={userProfile.email}
          blog={userProfile.blog}
        ></UserInfo>
      )}
      <div>
        <Repositories repositories={userRepos}></Repositories>
      </div>
    </StyledProfileContainer>
  );
};
