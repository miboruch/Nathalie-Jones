import React from 'react';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';

import { easeCubicOut } from 'd3-ease';
import { useTrail, animated } from 'react-spring';

import SectionContext from '../../context/sectionContext';

const LandingPage = () => {
  const AnimatedSection = animated(Section);
  const context = React.useContext(SectionContext);

  console.log(context);

  const trail = useTrail(context.length, {
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 3000,
    config: { duration: 1000, easing: easeCubicOut }
  });

  return (
    <>
      <Header></Header>
      {trail.map((props, index) => (
        <AnimatedSection
          style={props}
          key={context[index].id}
          src={context[index].src}
          id={context[index].id}
          title={context[index].title}
        ></AnimatedSection>
      ))}
    </>
  );
};

export default LandingPage;
