import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  color: #aaa;
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  padding: 1em;
`;

const ModelingPage = () => {
  return (
    <StyledWrapper>
      <h1>Hello</h1>
      <StyledLink to={'/'}>go back</StyledLink>
    </StyledWrapper>
  );
};

export default ModelingPage;
