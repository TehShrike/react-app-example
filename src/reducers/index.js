import { combineReducers } from 'redux';

import channelMessages from './messages';

// Stub reducer to have a username in the state
function username(state = 'bob', action) {
  return state;
}

const combinedReducer = combineReducers({
  channelMessages,
  username,
});

export default combinedReducer;
