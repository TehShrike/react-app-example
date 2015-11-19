import mockAPI from '../utils/mockAPI';

export const MESSAGES_LOAD_PENDING = 'MESSAGES_LOAD_PENDING';
export const MESSAGES_LOAD_SUCCESS = 'MESSAGES_LOAD_SUCCESS';
export const MESSAGES_LOAD_FAILURE = 'MESSAGES_LOAD_FAILURE';
export const MESSAGES_ADD = 'MESSAGES_ADD';

// Entry point action for loading messages
export function loadMessages() {
  return (dispatch, getState) => {
    dispatch(loadingMessages());
    mockAPI.getMessages().then(messages => {
      dispatch(loadedMessages(messages));
    }).catch(error => {
      console.log(error);
      dispatch(loadingMessagesFailed(error));
    });
  };
}

export function sendMessage(text) {
  return (dispatch, getState) => {
    mockAPI.sendMessage(getState().username, text).then(message => {
      dispatch(addMessage(message))
    })
  }
}

// Set loading messages state to pending
export function loadingMessages() {
  return {
    type: MESSAGES_LOAD_PENDING,
  };
}

// Finally load the messages into state. This is the success result.
export function loadedMessages(messages) {
  return {
    type: MESSAGES_LOAD_SUCCESS,
    messages,
    receivedAt: Date.now()
  }
}

// Set the error message. This is the failure result.
export function loadingMessagesFailed(error) {
  return {
    type: MESSAGES_LOAD_FAILURE,
    error,
  };
}

export function addMessage(message) {
  return {
    type: MESSAGES_ADD,
    message: message
  }
}
