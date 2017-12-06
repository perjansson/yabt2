import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

const defaultState = {
  burgers: null,
}

export const actionTypes = { GOT_BURGERS: 'GOT_BURGERS' }

export const actionCreators = {
  gotBurgers: burgers => ({
    type: actionTypes.GOT_BURGERS,
    payload: burgers,
  }),
}

export const reducer = (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.GOT_BURGERS:
      return { ...state, burgers: payload }
    default:
      return state
  }
}

export const initStore = (initialState = defaultState) =>
  createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)))
