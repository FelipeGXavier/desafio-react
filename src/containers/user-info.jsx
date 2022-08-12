import styled from "styled-components";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineBank,
  AiOutlineMail,
  AiOutlineLink,
  AiOutlineTwitter,
  AiOutlinePushpin,
  AiOutlineCode,
} from "react-icons/ai";
import { Button } from "../components/button/button";
import { Photo } from "../components/photo/photo";
import { useNavigate } from "react-router-dom";

const InfoWrapper = styled.div`
  width: 500px;
  background-color: #3b4252;
  margin-right: 25px;
  padding: 25px;
  color: #cfcfcf;
`;

const StyledStatsWrapper = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const StyledUserStats = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  font-style: italic;
`;

const StyledDescription = styled.p`
  opacity: 0.5;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const StyledHeader = styled.h1`
  font-weight: 100;
  font-style: italic;
  margin-bottom: 5px;
`;

const StyledUsername = styled.p`
  font-weight: 100;
  font-style: italic;
  font-size: 1.2em;
  margin: 0;
`;

const StyledProfileInfo = styled(StyledUserStats)`
  margin-bottom: 10px;
  font-size: 1.5em;
  font-weight: 100;

  & > svg {
    margin-right: 10px;
    opacity: 0.8;
  }
`;

const PhotoWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;

export const UserInfo = ({
  photoSrc = "",
  userName = "--",
  userLogin = "--",
  organization = "--",
  localization = "--",
  repositories = "--",
  followers = "--",
  following = "--",
  bio = "",
  twitter = "--",
  email = "--",
  blog = "--",
}) => {
  const navigate = useNavigate();

  const formatNullInformation = (info) => {
    return info || "--";
  };

  const UserInfo = () => {
    return (
      <>
        <PhotoWrapper>
          <Photo src={photoSrc}></Photo>
        </PhotoWrapper>
        <StyledHeader>{userName}</StyledHeader>
        <StyledUsername>@{userLogin}</StyledUsername>
        <StyledDescription>{bio}</StyledDescription>
        <StyledStatsWrapper>
          <StyledUserStats>
            <AiOutlineUser size={20}></AiOutlineUser> {followers} followers
          </StyledUserStats>
          <StyledUserStats>
            <AiOutlineHeart size={20}></AiOutlineHeart> {following} following
          </StyledUserStats>
          <StyledUserStats>
            <AiOutlineCode size={20}></AiOutlineCode> {repositories}{" "}
            repositories
          </StyledUserStats>
        </StyledStatsWrapper>
      </>
    );
  };

  const UserStats = () => {
    return (
      <>
        <StyledProfileInfo>
          <AiOutlineBank size={32}></AiOutlineBank>
          {formatNullInformation(organization)}
        </StyledProfileInfo>
        <StyledProfileInfo>
          <AiOutlinePushpin size={32}></AiOutlinePushpin>
          {localization}
        </StyledProfileInfo>
        <StyledProfileInfo>
          <AiOutlineMail size={32}></AiOutlineMail>
          {formatNullInformation(email)}
        </StyledProfileInfo>
        <StyledProfileInfo>
          <AiOutlineLink size={32}></AiOutlineLink>
          {formatNullInformation(blog)}
        </StyledProfileInfo>
        <StyledProfileInfo>
          <AiOutlineTwitter size={32}></AiOutlineTwitter>
          {formatNullInformation(twitter)}
        </StyledProfileInfo>
      </>
    );
  };

  return (
    <InfoWrapper>
      <UserInfo />
      <UserStats />
      <ButtonWrapper>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Voltar
        </Button>
      </ButtonWrapper>
    </InfoWrapper>
  );
};
