import React from 'react';
import styled from 'styled-components';

import LocationPicker from "../location/LocationPicker";

const MainContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const YellowContainer = styled.div`
  background-color: #f3ce56;
  padding: 16px 8px;
`;

const Title = styled.h1`
  font-size: 28px;
  line-height: 32px;
`;

const HomePage = () => {
  return (
    <MainContainer>
      <YellowContainer>
        <Title>
          Let’s find your ideal car
        </Title>
        <LocationPicker/>
      </YellowContainer>
    </MainContainer>
  );
};

export default HomePage;
