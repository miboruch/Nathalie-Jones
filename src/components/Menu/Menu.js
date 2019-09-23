import React from 'react';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';

import { Link } from 'react-router-dom';
import { menuItems } from './menuItems';

const StyledList = styled.ul`
  width: 100%;
  list-style-type: none;
  position: absolute;
  top: 20%;
`;

const StyledListItem = styled(animated.li)`
  width: 300px;
  color: #000;
  font-size: 30px;
  font-weight: bold;
  padding: 1rem 0;
  letter-spacing: 5px;
  background: linear-gradient(#333, tomato) left no-repeat #999;
  background-size: 0% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  pointer-events: none;

  :hover {
    background-size: 100% 100%;
    transition: 1s;
  }
`;

const StyledSpan = styled.span`
  font-size: 15px;
  padding-right: 1em;
`;

const StyledMenuOverlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: visibility 2s ease;
`;

const StyledBlock = styled.div`
  position: absolute;
  width: ${({ isOpen }) => (isOpen ? 'calc(100% / 3)' : '0')};
  height: 100vh;
  left: 0;
  background: #fcf0ec;
  transition: width 1.5s ease;
`;

const StyledSecondBlock = styled(StyledBlock)`
  left: 33.33%;
  ${'' /* transition: width 1s 1.3s ease;  */} /* ON DESKTOP */
`;

const StyledThirdBlock = styled(StyledBlock)`
  left: 66.66%;
  ${'' /* transition: width 1s 2.6s ease; */} /* ON DESKTOP */
`;

const StyledStripe = styled.span`
  width: 1px;
  height: ${({ isOpen }) => (isOpen ? '100vh' : '1vh')};
  background: ${({ isOpen }) =>
    isOpen ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  position: absolute;
  transition: background 2s ease, height 2s 1s ease;
  left: 33.33%;
`;

const StyledSecondStrip = styled(StyledStripe)`
  left: 66.66%;
  transition: background 2s ease, height 2s 2s ease;
`;

const StyledLink = animated(Link);

const Menu = ({ isOpen, toggleMenu }) => {
  const trail = useTrail(menuItems.length, {
    from: {
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateX(-30px)',
      pointerEvents: 'none'
    },
    to: {
      pointerEvents: isOpen ? 'auto' : 'none',
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? 'visible' : 'hidden',
      transform: 'translateX(0)'
    },
    delay: isOpen ? 3000 : 0,
    reset: isOpen,
    reverse: !isOpen
  });

  return (
    <StyledMenuOverlay isOpen={isOpen}>
      <StyledBlock isOpen={isOpen} />
      <StyledSecondBlock isOpen={isOpen} />
      <StyledThirdBlock isOpen={isOpen} />

      <StyledStripe isOpen={isOpen} />
      <StyledSecondStrip isOpen={isOpen} />

      <StyledList>
        {trail.map((props, index) => (
          <StyledLink
            to='/modeling'
            key={menuItems[index].id}
            onClick={toggleMenu}
          >
            <StyledListItem style={props}>
              <StyledSpan>{menuItems[index].id}</StyledSpan>
              {menuItems[index].name}
            </StyledListItem>
          </StyledLink>
        ))}
      </StyledList>
    </StyledMenuOverlay>
  );
};

export default Menu;
