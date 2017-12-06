import { actionTypes } from './actions'

export const defaultState = {
  burgers: null,
}

const reducer = (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.GOT_BURGERS:
      return {
        ...state,
        burgers: payload.reduce((burgers, burger) => ({ ...burgers, [burger.id]: burger }), {}),
      }
    default:
      return state
  }
}

export default reducer
