import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  min-width: 60px;
  
  font-size: 12px;
  color: #fff;
  text-align: center;
  
  background-color: #0f6193;
  
  padding: 1px 4px;
  
  border-radius: 4px;
`;

const LocationTypePill = ({locationType}) => {
  const locationTypes = {
    'C': 'City',
    'A': 'Airport',
    'S': 'Station',
    'D': 'District'
  };

  const locationColors = {
    'C': '#0f6193',
    'A': 'rgb(150, 20, 18)',
    'S': 'rgb(91, 91, 91)',
    'D': 'rgb(1, 124, 68)'
  };

  const text = locationTypes[locationType] || 'City';
  const backgroundColor = locationColors[locationType];
  return (
    <Container style={{backgroundColor}}>
      {text}
    </Container>
  );
};

LocationTypePill.propTypes = {
  locationType: PropTypes.string.isRequired
};

export default LocationTypePill;
