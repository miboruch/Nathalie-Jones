import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 90%;
  height: 70vh;
  object-fit: cover;
  position: relative;
`;

const StyledHeading = styled.h1`
  position: absolute;
  top: 20%;
  z-index: 4;
  letter-spacing: 10px;
`;

const StyledParagraph = styled.p`
  width: 80%;
  letter-spacing: 2px;
`;

const Header = () => (
  <StyledHeader>
    <StyledHeading>NATHALIE</StyledHeading>
    <StyledImage src={'./images/header.jpg'} alt='logo'></StyledImage>
  </StyledHeader>
);

export default Header;
