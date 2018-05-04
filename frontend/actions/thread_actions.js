import * as threadApiUtil from "../util/thread_api_util";

export const RECEIVE_ALL_THREADS = "RECEIVE_ALL_THREADS";
export const RECEIVE_THREAD = "RECEIVE_THREAD";
export const REMOVE_THREAD = "REMOVE_THREAD";
export const RECEIVE_THREAD_ERRORS = "RECEIVE_THREAD_ERRORS";
export const CLEAR_THREAD_ERRORS = "CLEAR_THREAD_ERRORS";

export const receiveAllChannels = threads => ({
  type: RECEIVE_ALL_THREADS,
  threads
});

export const receiveChannel = thread => {
  return {
    type: RECEIVE_THREAD,
    thread
  };
};

export const removeChannel = threadId => {
  return {
    type: REMOVE_THREAD,
    threadId
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_THREAD_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_THREAD_ERRORS
  };
};

export const fetchChannels = () => dispatch =>
  threadApiUtil
    .fetchChannels()
    .then(threads => dispatch(receiveAllChannels(threads)));

export const fetchChannel = id => dispatch => {
  return threadApiUtil.fetchChannel(id).then(thread => {
    return dispatch(receiveChannel(thread));
  });
};

export const createChannel = thread => dispatch =>
  threadApiUtil.createChannel(thread).then(
    thread => dispatch(receiveChannel(thread)),
    err => {
      return dispatch(receiveErrors(err.responseJSON));
    }
  );

export const updateChannel = thread => dispatch =>
  threadApiUtil
    .updateChannel(thread)
    .then(thread => dispatch(receiveChannel(thread)));

export const deleteChannel = threadId => dispatch =>
  threadApiUtil
    .deleteChannel(threadId)
    .then(thread => dispatch(removeChannel(threadId)));
