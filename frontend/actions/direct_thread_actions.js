import * as directThreadApiUtil from "../util/direct_thread_api_util";

export const RECEIVE_ALL_DIRECT_THREADS = "RECEIVE_ALL_DIRECT_THREADS";
export const RECEIVE_DIRECT_THREAD = "RECEIVE_DIRECT_THREAD";
export const REMOVE_DIRECT_THREAD = "REMOVE_DIRECT_THREAD";
export const RECEIVE_DIRECT_THREAD_ERRORS = "RECEIVE_DIRECT_THREAD_ERRORS";
export const CLEAR_DIRECT_THREAD_ERRORS = "CLEAR_DIRECT_THREAD_ERRORS";

export const receiveAllDirectThreads = directThreads => ({
  type: RECEIVE_ALL_DIRECT_THREADS,
  directThreads
});

export const receiveDirectThread = directThread => {
  return {
    type: RECEIVE_DIRECT_THREAD,
    directThread
  };
};

export const removeDirectThread = directThreadId => {
  return {
    type: REMOVE_DIRECT_THREAD,
    directThreadId
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_DIRECT_THREAD_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_DIRECT_THREAD_ERRORS
  };
};

export const fetchDirectThreads = () => dispatch =>
  directThreadApiUtil
    .fetchDirectThreads()
    .then(directThreads => dispatch(receiveAllDirectThreads(directThreads)));

export const fetchDirectThread = id => dispatch => {
  return directThreadApiUtil.fetchDirectThread(id).then(directThread => {
    return dispatch(receiveDirectThread(directThread));
  });
};

export const createDirectThread = (directThread, members) => dispatch => {

  return directThreadApiUtil.createDirectThread(directThread, members).then(
    directThread => dispatch(receiveDirectThread(directThread)),
    err => {
      return dispatch(receiveErrors(err.responseJSON));
    }
  );
};

export const updateDirectThread = directThread => dispatch =>
  directThreadApiUtil
    .updateDirectThread(directThread)
    .then(directThread => dispatch(receiveDirectThread(directThread)));

export const deleteDirectThread = directThreadId => dispatch =>
  directThreadApiUtil
    .deleteDirectThread(directThreadId)
    .then(directThread => dispatch(removeDirectThread(directThreadId)));
