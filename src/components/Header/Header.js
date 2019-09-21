import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { TimelineLite } from 'gsap';

const StyledHeader = styled.header`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledLine = styled.div`
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

const StyledHeading = styled.h1`
  position: absolute;
  top: 20%;
  z-index: 4;
  letter-spacing: 20px;
  color: ${({ theme }) => theme.color.background};
  text-shadow: 3px 3px 8px #bbb;
  text-align: center;
`;

const Header = () => {
  let line = useRef(null);
  let heading = useRef(null);
  const tween = new TimelineLite({ paused: true });

  useEffect(() => {
    tween
      .fromTo(line, 1, { width: 0 }, { width: '90%' })
      .fromTo(
        heading,
        1,
        { opacity: 0, top: '15%' },
        { opacity: 1, top: '20%' }
      );

    tween.play();
  }, []);

  return (
    <StyledHeader>
      <StyledHeading ref={element => (heading = element)}>
        NATHALIE
      </StyledHeading>
      <StyledImage src={'./images/header.jpg'} alt='logo'></StyledImage>
      <StyledLine ref={element => (line = element)} />
    </StyledHeader>
  );
};

export default Header;
