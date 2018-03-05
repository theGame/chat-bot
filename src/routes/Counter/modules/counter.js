// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  console.log('[doubleAsync]');
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 2000)
    })
  }
}

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: function(state, action) {
    console.log('[COUNTER_INCREMENT]');
    console.log(state);
    console.log(action);
    return state + action.payload;
  },
  [COUNTER_DOUBLE_ASYNC] : function(state, action) {
    console.log('[COUNTER_INCREMENT]');
    console.log(state);
    console.log(action);
    return state * 2;
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  console.log('[counterReducer]');
  const handler = ACTION_HANDLERS[action.type]
  console.log('[counterReducer]');
  console.log(handler);
  return handler ? handler(state, action) : state
}
