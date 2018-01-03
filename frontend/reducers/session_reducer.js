import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({
  user: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_CURRENT_USER:
      const user = action.user;
      return merge({}, { user });
    default:
      return state;
  }
};

export default sessionReducer;
