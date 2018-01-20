import { createSelector } from 'reselect'

export const selectState = (state = {}) => state.burgers

export const selectBurgers = createSelector(
    [selectState],
    burgers => (burgers ? Object.values(burgers) : null)
)
