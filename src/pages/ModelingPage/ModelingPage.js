import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import ContentHeader from '../../components/ContentHeader/ContentHeader';

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
      <ContentHeader
        title={'Modeling'}
        src={'./images/hero.jpg'}
      ></ContentHeader>
    </StyledWrapper>
  );
};

export default ModelingPage;
