import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import userReducer from './user'
import productReducer from './products'
import cartReducer from './cart'
import reviewReducer from './reviews'

const reducer = combineReducers({userReducer, productReducer, cartReducer, reviewReducer})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware);

export default store
export * from './user';
export * from './products';
export * from './cart';
export * from './reviews'

