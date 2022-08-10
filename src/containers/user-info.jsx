import styled from "styled-components";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineStar,
  AiOutlineBank,
  AiOutlineMail,
  AiOutlineLink,
  AiOutlineTwitter,
  AiOutlinePushpin,
} from "react-icons/ai";
import { Button } from "../components/button/button";
import { Photo } from "../components/photo/photo";
import { useNavigate } from "react-router-dom";

const InfoWrapper = styled.div`
  max-width: 500px;
  background-color: #3b4252;
  height: 100vh;
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
  stars = "--",
  repositories = "--",
  followers = "--",
  following = "--",
}) => {
  const navigate = useNavigate();

  const UserInfo = () => {
    return (
      <>
        <PhotoWrapper>
          <Photo src={photoSrc}></Photo>
        </PhotoWrapper>
        <StyledHeader>Developer's full name</StyledHeader>
        <StyledUsername>@{userName}</StyledUsername>
        <StyledDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex
          enim nam deserunt ea voluptates, tempora unde officia repellat
          adipisci perspiciatis animi iste, ad ipsa alias. Aliquam sequi
          officiis veniam.
        </StyledDescription>
        <StyledStatsWrapper>
          <StyledUserStats>
            <AiOutlineUser size={20}></AiOutlineUser> {followers} followers
          </StyledUserStats>
          <StyledUserStats>
            <AiOutlineHeart size={20}></AiOutlineHeart> {following} following
          </StyledUserStats>
          <StyledUserStats>
            <AiOutlineStar size={20}></AiOutlineStar> {stars} stars
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
          {organization}
        </StyledProfileInfo>
        <StyledProfileInfo>
          <AiOutlinePushpin size={32}></AiOutlinePushpin>
          {localization}
        </StyledProfileInfo>
        <StyledProfileInfo>
          <AiOutlineMail size={32}></AiOutlineMail>email
        </StyledProfileInfo>
        <StyledProfileInfo>
          <AiOutlineLink size={32}></AiOutlineLink>www.site.com
        </StyledProfileInfo>
        <StyledProfileInfo>
          <AiOutlineTwitter size={32}></AiOutlineTwitter>@twitter
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
