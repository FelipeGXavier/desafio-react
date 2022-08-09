import styled from "styled-components";

const StyledInput = styled.input`
  width: 500px;
  height: 50px;
  padding: 0 15px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const InputSearch = ({ placeholder }) => {
  return <StyledInput type="search" placeholder={placeholder}></StyledInput>;
};
