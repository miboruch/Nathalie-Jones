import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h4`
  letter-spacing: 4px;
  margin: 1.4rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Logo = () => <StyledHeading>Nathalie Jones</StyledHeading>;

export default Logo;
