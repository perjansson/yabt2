import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import withRedux from 'next-redux-wrapper'

import { actionCreators } from './actions'
import reducer, { defaultState } from './reducer'

export const initStore = (initialState = defaultState) =>
    createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch)
})

export const reduxPage = Page =>
    withRedux(initStore, null, mapDispatchToProps)(Page)
