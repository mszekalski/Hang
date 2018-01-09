import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer.js';
import channelsReducer from './channels_reducer.js';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  channels: channelsReducer

});

export default rootReducer;
