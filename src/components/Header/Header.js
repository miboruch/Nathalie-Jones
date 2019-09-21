import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';

import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  width: 100vw;
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  z-index: 99;
`;

const StyledLine = styled(animated.div)`
  width: 90%;
  height: 2px;
  background: #aaa;
  margin-top: 4em;
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

const StyledHeading = styled(animated.h1)`
  position: absolute;
  top: 20%;
  z-index: 4;
  letter-spacing: 20px;
  color: ${({ theme }) => theme.color.background};
  text-shadow: 3px 3px 8px #bbb;
  text-align: center;
`;

const Header = () => {
  const lineAnimationProps = useSpring({
    config: { duration: 2000, easing: easeCubicInOut },
    delay: 3000,
    from: { width: 0 },
    to: { width: 300 }
  });

  const headingAnimationProps = useSpring({
    config: { duration: 1500, easing: easeCubicInOut },
    delay: 3500,
    from: { opacity: 0, top: '15%' },
    to: { opacity: 1, top: '20%' }
  });

  return (
    <StyledHeader>
      <StyledLink to={'/modeling'}>click</StyledLink>
      <StyledHeading style={headingAnimationProps}>NATHALIE</StyledHeading>
      <StyledImage src={'./images/header.jpg'} alt='logo'></StyledImage>
      <StyledLine style={lineAnimationProps} />
    </StyledHeader>
  );
};

export default Header;
