import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { easeCubicOut } from 'd3-ease';

const StyledWrapper = styled(animated.section)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #fcf0ec;
  z-index: 999;
  transform: translateX(-100%);
`;

const Loader = () => {
  const { props } = useTransition(true, null, {
    // from: { opacity: 1 },
    // enter: { opacity: 0 },
    // leave: { opacity: 1 },
    from: { transform: 'translateX(1%)' },
    enter: { transform: 'translateX(100%)' },
    leave: { transform: 'translateX(-80%)' },
    config: { duration: 2000, easing: easeCubicOut }
  })[0];
  console.log(props);
  return <StyledWrapper style={props}></StyledWrapper>;
};

export default Loader;
