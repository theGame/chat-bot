import service from './../../../services/bot';
// ------------------------------------
// Constants
// ------------------------------------
export const ASKING = 'ASKING';
export const GET_ANSWER = 'GET_ANSWER';

// ------------------------------------
// initialState------------------------
// ------------------------------------
const initialState = {
  messages: [],
  isLoading: false
};

// ------------------------------------
// Actions
// ------------------------------------
const asking = (message) => ({
  type    : ASKING,
  payload : {
    who: 'User',
    message
  }
});

const getAnswer = (who, message) => ({
  type    : GET_ANSWER,
  payload : {
    who,
    message
  }
});

export const ask = (message) => {
  return (dispatch, getState) => {
    dispatch(asking(message));
    const request = service.getRequest(message);

    return fetch(request)
      .then((response) => {
        response.ok && response.json().then(data => {
          const message = data.result.fulfillment.speech;
          setTimeout(() => dispatch(getAnswer('Bot', message)), 2000); // just to show bubbles on UI side
        });
      },
      (err) => { return console.log(err) });
  }
};

export const actions = {
  ask
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ASKING]: function (state, action) {
    const timestamp = new Date().getTime();
    return Object.assign(
      {},
      { messages: [...state.messages, { message: action.payload.message, who: action.payload.who, timestamp }] },
      { isLoading: true });
  },
  [GET_ANSWER]: function (state, action) {
    const timestamp = new Date().getTime();
    return Object.assign(
      {},
      { messages: [...state.messages, { message: action.payload.message, who: action.payload.who, timestamp }] },
      { isLoading: false }
    );
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function chatReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state;
};
