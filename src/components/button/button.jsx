import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 30px 10px 30px;
  border: none;
  font-style: italic;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`;

export const Button = ({
  bgColor = "#ffff",
  onClick,
  children,
  color = "#3b4252",
  icon = "",
}) => {
  const Icon = icon;
  return (
    <StyledButton style={{ backgroundColor: bgColor, color }} onClick={onClick}>
      {icon && (
        <Icon
          size={30}
          style={{ backgroundColor: bgColor, marginRight: "5px" }}
        ></Icon>
      )}
      {children}
    </StyledButton>
  );
};
