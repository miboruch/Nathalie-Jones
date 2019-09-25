import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';
import Fade from 'react-reveal/Fade';

const StyledWrapper = styled.section`
  width: 100%;
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled(animated.img)`
  width: 90%;
  height: 70vh;
  object-fit: cover;
  position: relative;
  margin: 1rem auto;
`;

const StyledHeading = styled.h1`
  letter-spacing: 10px;
  margin: 1em auto;
`;

const StyledContentWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.impactBackground};
  text-align: center;
`;

const StyledTextContent = styled.p`
  width: 90%;
  margin: auto;
  color: #999;
  padding-top: 1em;
`;

const ContentHeader = ({ title, src }) => {
  const imageAnimationProps = useSpring({
    config: { duration: 1500, easing: easeCubicInOut },
    from: { background: '#000', opacity: 0, height: '4vh' },
    to: { opacity: 1, height: '70vh' },
    delay: 1000
  });

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeading>{title}</StyledHeading>
        <StyledImage src={src} style={imageAnimationProps} />
      </StyledHeader>
      <StyledContentWrapper>
        <StyledTextContent>
          <Fade duration={1000}>
            Nathalie Jones was born in 1995, 28th January
          </Fade>
        </StyledTextContent>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default ContentHeader;
