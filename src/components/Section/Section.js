import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const StyledWrapper = styled(animated.section)`
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
  font-size: 50px;
  letter-spacing: 10px;
  text-align: center;
  font-size: 30px;
  margin: 0;
  color: #fff;
  -webkit-text-stroke: 1px #ddd;
  stroke-dasharray: 200;
  stroke-dashoffset: 1000;
`;

const StyledParagraph = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 1em 1em;
`;

const Section = ({ src, title, id }) => {
  const animationProps = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 }
  });

  return (
    <StyledWrapper style={animationProps}>
      <StyledParagraph>0/1/{id}</StyledParagraph>
      <StyledBackground src={src} id={id}></StyledBackground>
      <StyledHeader>{title}</StyledHeader>
      <StyledLink to={'/modeling'}>
        <StyledDetails>More</StyledDetails>
      </StyledLink>
    </StyledWrapper>
  );
};

export default Section;
