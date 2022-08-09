import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
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
  return (
    <Container>
      <StyledHeader>Search Devs</StyledHeader>
      <HorizontalAlign>
        <InputSearch placeholder="Type the username here..."></InputSearch>
        <Button color="#ebeced" bgColor="#3b4252" icon={AiOutlineSearch}>
          Buscar
        </Button>
      </HorizontalAlign>
    </Container>
  );
};
