import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  width: 100%;
  height: 40vh;
  position: relative;
  margin-bottom: 150px;
`;

const StyledBackground = styled.div`
  width: 80%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;

  ::before {
    content: '${({ id }) => id}';
    font-family: ${({ theme }) => theme.font.family.raleway};
    position: absolute;
    font-weight: bold;
    font-size: 150px;
    color: rgba(255, 255, 255, 0.7);
    top: -35%;
    right: 0;
    z-index: -1;
  }
`;

const StyledDetails = styled.div`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 5px;
  border-bottom: 1px solid #000;
  transform: rotate(90deg);
  top: 50%;
  right: 0;
  padding: 0.5em 0;
`;

const StyledHeader = styled.h1`
  letter-spacing: 10px;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  margin: 0;
  color: ${({ theme }) => theme.color.background};
`;

const Section = ({ src, title, description, id }) => {
  return (
    <StyledWrapper>
      0/1/1/2
      <StyledBackground src={src} id={id}></StyledBackground>
      <StyledHeader>{title}</StyledHeader>
      <StyledDetails>More</StyledDetails>
    </StyledWrapper>
  );
};

export default Section;
