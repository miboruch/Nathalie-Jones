import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  z-index: 901;
  margin: 1rem 1.5rem;
  position: fixed;
  top: 0;
  right: 0;
  border-left: 1px solid #aaa;
  transition: all 1s ease;

  :focus {
    outline: none;
  }
`;

const InnerHamburger = styled.div`
  width: 26px;
  height: 2px;
  position: relative;
  background: transparent;

  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 26px;
    height: 2px;
    background: ${({ isOpen }) => (isOpen ? '#aaa' : '#000')};
    left: 0;
    transition: all 0.3s ease;
  }

  ::before {
    transform: rotate(${({ isOpen }) => (isOpen ? '40deg' : '0')});
    top: ${({ isOpen }) => (isOpen ? '0' : '4px')};
  }

  ::after {
    transform: rotate(${({ isOpen }) => (isOpen ? '-40deg' : '0')});
    top: ${({ isOpen }) => (isOpen ? '0' : '-4px')};
  }
`;

const Hamburger = ({ isOpen, toggleMenu }) => {
  return (
    <StyledHamburger onClick={toggleMenu} isOpen={isOpen}>
      <InnerHamburger isOpen={isOpen}></InnerHamburger>
    </StyledHamburger>
  );
};

export default Hamburger;
