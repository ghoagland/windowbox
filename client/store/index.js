import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import userReducer from './user'
import productReducer from './products'
import cartReducer from './cart'

const reducer = combineReducers({userReducer, productReducer, cartReducer})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware);

export default store
export * from './user';
export * from './products';
export * from './cart';

