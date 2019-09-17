import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';

import Logo from '../components/Logo/Logo';
import Hamburger from '../components/Hamburger/Hamburger';
import Footer from '../components/Footer/Footer';
// TODO hamburger/menu

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Logo />
        <Hamburger />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default MainTemplate;
