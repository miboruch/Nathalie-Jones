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

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    top: -5px;
    right: -5px;
  }
`;

const StyledHeading = styled.h1`
  position: absolute;
  top: 20%;
  z-index: 4;
  letter-spacing: 20px;
  color: ${({ theme }) => theme.color.background};
  text-shadow: 3px 3px 8px #bbb;
  text-align: center;
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
