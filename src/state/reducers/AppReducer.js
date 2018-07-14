import {combineReducers} from 'redux';

import {LocationsReducer} from '../reducers/LocationsReducer';

export const AppReducer = combineReducers({
  location: LocationsReducer
});
