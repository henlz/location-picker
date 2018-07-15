import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LocationTypePill from './LocationTypePill';

const Container = styled.div`
  position: absolute;
  width: 100%;
`;

const ResultsContainer = styled.ol`
  position: absolute;
  display: table;
  
  width: 100%;
  
  background: #fff;
  -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);
  
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
  
  border-radius: 4px;
  
  z-index: 10;
  
  overflow: hidden;
  list-style: none;
  
  padding: 0;
  margin: 0;
`;

const ResultItem = styled.li`
  height: 100%;
  width: 100%;
  
  padding: 8px 16px;
  
  cursor: pointer;
  
  display: table-row;
  
  border-bottom: 1px solid rgb(68, 68, 68);
  
  &:last-child {
    border-bottom: 0;
  }
  
  &:hover, &:focus {
    background-color: #e7f4fe;
  }
`;

const PillContainer = styled.div`
  display: table-cell;
  padding: 8px 16px;
  width: 1px;
`;

const LocationContainer = styled.div`
  display: table-cell;
  padding: 4px 0;
  
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
`;

const LocationName = styled(LocationContainer)`
  font-size: 15px;
`;

const LocationResults = ({locations}) => {
  if (!locations) {
    return <noscript/>;
  }

  return (
    <Container>
      <ResultsContainer>
        {locations.map(location => (
          <ResultItem key={location.locationId}>
            {
              location.placeType &&
              <PillContainer>
                <LocationTypePill locationType={location.placeType}/>
              </PillContainer>
            }
            <LocationContainer>
              <LocationName>{location.name}</LocationName>
              {location.region}, {location.country}
            </LocationContainer>
          </ResultItem>
        ))}
      </ResultsContainer>
    </Container>
  );
};

LocationResults.propTypes = {
  locations: PropTypes.array.isRequired
};

export default LocationResults;
