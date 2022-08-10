import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/button/button";
import { InputSearch } from "../components/input/input";

const Container = styled.main`
  height: calc(100vh - 30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HorizontalAlign = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledHeader = styled.h1`
  font-size: 2.5em;
  font-weight: 100;
  font-style: italic;
  text-align: center;
`;

export const Home = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/profile/${username}`);
  };

  return (
    <Container>
      <StyledHeader>Search Devs</StyledHeader>
      <HorizontalAlign>
        <InputSearch
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Type the username here..."
        ></InputSearch>
        <Button
          onClick={handleSubmit}
          color="#ebeced"
          bgColor="#3b4252"
          icon={AiOutlineSearch}
        >
          Buscar
        </Button>
      </HorizontalAlign>
    </Container>
  );
};
