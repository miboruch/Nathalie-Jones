import React from 'react';
import styled from 'styled-components';

import { menuItems } from './menuItems';

const StyledWrapper = styled.header`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
`;

const StyledList = styled.ul`
  width: 100%;
  list-style-type: none;
  position: absolute;
  top: 20%;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: all 1s 0.5s ease;
`;

const StyledListItem = styled.li`
  width: 300px;
  color: #000;
  font-size: 30px;
  font-weight: bold;
  padding: 1rem 0;
  letter-spacing: 5px;
  background: linear-gradient(#333, #333) left no-repeat #999;
  background-size: 0% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 1s;
  cursor: pointer;
  margin: 0;

  :hover {
    background-size: 100% 100%;
    transition: 3s;
  }
`;

const StyledSpan = styled.span`
  font-size: 15px;
  padding-right: 1em;
`;

const StyledMenuOverlay = styled.section`
  position: absolute;
  width: 100%;
  height: 100vh;
`;

const StyledBlock = styled.div`
  position: absolute;
  width: ${({ isOpen }) => (isOpen ? 'calc(100% / 3)' : '0')};
  height: 100vh;
  left: 0;
  background: #fcf0ec;
  transition: width 1s ease;
`;

const StyledSecondBlock = styled(StyledBlock)`
  left: 33.33%;
  ${'' /* transition: width 1s 1.3s ease; */} /* ON DESKTOP */
`;

const StyledThirdBlock = styled(StyledBlock)`
  left: 66.66%;
  ${'' /* transition: width 1s 2.6s ease; */} /* ON DESKTOP */
`;

const StyledStripe = styled.span`
  width: 1px;
  height: 100vh;
  background: ${({ isOpen }) =>
    isOpen ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'};
  position: absolute;
  transition: all 2s ease;
  left: 33.33%;
`;

const StyledSecondStrip = styled(StyledStripe)`
  left: 66.66%;
`;

const Menu = ({ isOpen }) => {
  return (
    <StyledWrapper isOpen={isOpen}>
      <StyledMenuOverlay>
        <StyledBlock isOpen={isOpen} />
        <StyledSecondBlock isOpen={isOpen} />
        <StyledThirdBlock isOpen={isOpen} />

        <StyledStripe isOpen={isOpen} />
        <StyledSecondStrip isOpen={isOpen} />

        <StyledList isOpen={isOpen}>
          {menuItems.map(({ id, name }) => (
            <StyledListItem key={id}>
              <StyledSpan>{id}</StyledSpan>
              {name}
            </StyledListItem>
          ))}
        </StyledList>
      </StyledMenuOverlay>
    </StyledWrapper>
  );
};

export default Menu;
