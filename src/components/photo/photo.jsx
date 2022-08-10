import styled from "styled-components";

const StyledImage = styled.img`
  width: 280px;
  height: 280px;
`;

export const Photo = ({ src, alt = "User photo" }) => {
  return (
    <StyledImage
      alt={alt}
      src={src && src.length > 0 ? src : "../../default_image.jpg"}
    ></StyledImage>
  );
};
