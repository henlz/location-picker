import {
  FETCH_LOCATIONS_PENDING,
  FETCH_LOCATIONS_FULFILLED,
  FETCH_LOCATIONS_REJECTED
} from '../actions/LocationActions';

const initialState = {
  locations: [],
  fetching: false,
  fetched: false,
  failed: false
};

export const LocationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS_PENDING:
      return {
        ...state,
        locations: [],
        fetching: true,
        fetched: false,
        failed: false
      };
    case FETCH_LOCATIONS_FULFILLED:
      return {
        ...state,
        locations: action.payload.results.docs,
        fetching: false,
        fetched: true,
        failed: false
      };
    case FETCH_LOCATIONS_REJECTED:
      return {
        ...state,
        locations: [],
        fetching: false,
        fetched: false,
        failed: true
      };
    default:
      return state;
  }
};