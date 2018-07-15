import {fetchLocations} from '../../services/LocationService';

export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
export const FETCH_LOCATIONS_PENDING = 'FETCH_LOCATIONS_PENDING';
export const FETCH_LOCATIONS_FULFILLED = 'FETCH_LOCATIONS_FULFILLED';
export const FETCH_LOCATIONS_REJECTED = 'FETCH_LOCATIONS_REJECTED';

export const CLEAR_LOCATIONS = 'CLEAR_LOCATIONS';

const fetchLocationsAction = (searchText) => {
  return {
    type: FETCH_LOCATIONS,
    payload: fetchLocations(searchText)
  }
};

const clearLocations = () => {
  return {
    type: CLEAR_LOCATIONS
  }
};

export {
  fetchLocationsAction as fetchLocations,
  clearLocations
};