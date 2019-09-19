import React from 'react';

const PageContext = React.createContext({
  isOpen: false,
  toggleMenu: () => {}
});

export default PageContext;
