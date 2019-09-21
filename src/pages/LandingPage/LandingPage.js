import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';

import SectionContext from '../../context/sectionContext';

const LandingPage = () => {
  const context = React.useContext(SectionContext);

  return (
    <>
      <Header></Header>
      {context.map((item, index) => (
        // TODO <Link to={item.link}> ...<Section></Section> ... </Link>
        // TODO apply style for Link
        <Section
          key={index}
          src={item.src}
          id={item.id}
          title={item.title}
        ></Section>
      ))}
    </>
  );
};

export default LandingPage;
