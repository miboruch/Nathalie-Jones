import React from 'react';

import MainTemplate from './templates/MainTemplate';
import LandingPage from './pages/LandingPage/LandingPage';

// ! CREATE ROUTER FOR PAGES (FROM LANDINGPAGE.js)

function App() {
  return (
    <MainTemplate>
      <LandingPage></LandingPage>
    </MainTemplate>
  );
}

export default App;
