import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const RepositoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #3b4252;
  margin-top: 15px;
`;

const RepositoryStats = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHeader = styled.h1`
  font-size: 1.5em;
  font-weight: 100;
  font-style: italic;
  margin: 0px 0px 10px 0px;
  cursor: pointer;

  &: hover {
    color: black;
  }
`;

const StyledParagraph = styled.p`
  margin: 0px 0px 15px 0px;
`;

const Line = styled.div`
  width: calc(100vw - 600px);
  height: 1px;
  margin: 15px 0px 15px 0px;
  background-color: #3b4252;
  opacity: 0.2;
`;

const Dot = styled.div`
  height: 8px;
  width: 8px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
`;

const UpdateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

export const Repositories = ({ repositories }) => {
  const Repository = ({
    repositoryName = "--",
    repositoryLink = "",
    description = "--",
    stars = "--",
    lastUpdate = "--",
  }) => {
    console.log(repositoryLink);
    return (
      <RepositoryWrapper>
        <StyledHeader
          onClick={() => {
            window.open(repositoryLink, "_blank", "noopener,noreferrer");
          }}
        >
          {repositoryName}
        </StyledHeader>
        {description && <StyledParagraph>{description}</StyledParagraph>}
        <RepositoryStats>
          <AiOutlineStar size={28}></AiOutlineStar> {stars} stars
          <UpdateWrapper>
            <Dot></Dot>
            <span>{lastUpdate}</span>
          </UpdateWrapper>
        </RepositoryStats>
        <Line></Line>
      </RepositoryWrapper>
    );
  };
  return (
    <>
      {repositories.map((repo) => {
        return (
          <Repository
            repositoryName={repo.repositoryName}
            description={repo.description}
            stars={repo.stars}
            lastUpdate={repo.lastUpdate}
            repositoryLink={repo.repositoryLink}
          ></Repository>
        );
      })}
    </>
  );
};
