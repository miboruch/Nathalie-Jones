import React, { useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';

import Logo from '../components/Logo/Logo';
import Menu from '../components/Menu/Menu';
import Hamburger from '../components/Hamburger/Hamburger';
import Footer from '../components/Footer/Footer';

import { reducer } from '../reducer/reducer';
import PageContext from '../context/context';

const MainTemplate = ({ children }) => {
  const context = useContext(PageContext);
  const [state, dispatch] = useReducer(reducer, context);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Logo />
          <Hamburger
            toggleMenu={() => dispatch({ type: 'TOGGLE_MENU' })}
            isOpen={state.isOpen}
          />
          <Menu isOpen={state.isOpen} />
          {children}
          <Footer />
        </>
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default MainTemplate;
