export const actionTypes = { GOT_BURGERS: 'GOT_BURGERS' }

export const actionCreators = {
  gotBurgers: burgers => ({
    type: actionTypes.GOT_BURGERS,
    payload: burgers,
  }),
}
