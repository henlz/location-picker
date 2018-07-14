import {fetchLocations} from '../../services/LocationService';

export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
export const FETCH_LOCATIONS_PENDING = 'FETCH_LOCATIONS_PENDING';
export const FETCH_LOCATIONS_FULFILLED = 'FETCH_LOCATIONS_FULFILLED';
export const FETCH_LOCATIONS_REJECTED = 'FETCH_LOCATIONS_REJECTED';

const fetchLocationsAction = () => ({
  type: FETCH_LOCATIONS,
  payload: fetchLocations()
});

export {fetchLocationsAction as fetchLocations};