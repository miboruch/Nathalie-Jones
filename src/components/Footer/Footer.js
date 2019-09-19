import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
`;

const StyledBottom = styled.div`
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
    <p>NATHALIE JONES</p>
    <p>901-337-1953</p>
    <StyledBottom>
      <StyledParagraph>&copy; 2019 Nathalie Jones</StyledParagraph>
      <StyledParagraph>CREATED BY MICHALBORUCH</StyledParagraph>
    </StyledBottom>
  </StyledFooter>
);

export default Footer;
