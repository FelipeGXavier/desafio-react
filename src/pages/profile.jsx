import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserInfo } from "../containers/user-info";
import { getGithubProfile } from "../services/api";

export const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await getGithubProfile(username);

      if (response == null) {
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
      };

      setUserProfile(formattedResponse);
    };
    fetchUserProfile();
  });
  return (
    <>
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
        ></UserInfo>
      )}
    </>
  );
};
