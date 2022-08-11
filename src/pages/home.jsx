import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/button/button";
import { InputSearch } from "../components/input/input";

const Container = styled.main`
  height: calc(100vh - 30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HorizontalAlign = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledHeader = styled.h1`
  font-size: 2.5em;
  font-weight: 100;
  font-style: italic;
  text-align: center;
`;

const StyledAlert = styled.span`
  background-color: #ff4444;
  text-align: center;
  width: 250px;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  color: #ffff;
`;

export const Home = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/profile/${username}`);
  };

  return (
    <Container>
      <StyledHeader>Search Devs</StyledHeader>
      {location.state && <StyledAlert>{location.state.message}</StyledAlert>}
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
