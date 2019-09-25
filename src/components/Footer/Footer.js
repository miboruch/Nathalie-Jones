import React from 'react';
import styled from 'styled-components';

import { menuItems } from '../Menu/menuItems';

import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const StyledContactInfo = styled.section`
  text-align: center;
`;

const StyledNav = styled.nav`
  width: 90%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 1em;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  letter-spacing: 4px;
  color: #999;
  padding: 0.5rem 0;
`;

const StyledBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 0.5rem;
`;

const StyledParagraph = styled.p`
  font-size: 10px;
  color: #aaa;
  letter-spacing: 2px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Footer = () => (
  <StyledFooter>
    <StyledContactInfo>
      <p>NATHALIE JONES</p>
      <p>901-337-1953</p>
    </StyledContactInfo>
    <StyledNav>
      {menuItems.map(item => (
        <StyledLink to={item.path}>{item.name}</StyledLink>
      ))}
    </StyledNav>
    <StyledBottom>
      <StyledParagraph>&copy; 2019 Nathalie Jones</StyledParagraph>
      <StyledParagraph>CREATED BY MICHALBORUCH</StyledParagraph>
    </StyledBottom>
  </StyledFooter>
);

export default Footer;
