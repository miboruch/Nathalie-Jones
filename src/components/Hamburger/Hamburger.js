import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.button`
  cursor: pointer;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  z-index: 100;
  margin: 0.8rem 1rem;
  position: fixed;
  top: 0;
  right: 0;

  :focus {
    outline: none;
  }
`;

const InnerHamburger = styled.div`
  width: 30px;
  height: 2px;
  position: relative;
  background: transparent;

  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background: #000;
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

const Hamburger = () => {
  return (
    <StyledHamburger>
      <InnerHamburger></InnerHamburger>
    </StyledHamburger>
  );
};

export default Hamburger;
