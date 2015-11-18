import {
  MESSAGES_LOAD_PENDING,
  MESSAGES_LOAD_SUCCESS,
  MESSAGES_LOAD_FAILURE,
} from '../actions/messages';


function messagesToObjectById(messages) {
  let obj = {};
  messages.forEach(m => {
    obj[m.id] = m;
  });
  return obj;
}

const defaultChannelMessageState = {
  messagesPending: false,
  messagesError: '',
  lastUpdated: null,
  messages: {}
};

export default function channelMessages(state = defaultChannelMessageState, action) {
  switch (action.type) {
    case MESSAGES_LOAD_PENDING:
      return {
        ...state,
        messagesPending: true
      };
    case MESSAGES_LOAD_SUCCESS:
      return Object.assign({}, state, {
        messagesPending: false,
        messages: {
          ...state.messages,
          ...messagesToObjectById(action.messages),
        },
        lastUpdated: action.receivedAt
      });
    case MESSAGES_LOAD_FAILURE:
      return {
        ...state,
        messagesPending: false,
        messagesError: action.error
      };
    default:
      return state;
  }
}
