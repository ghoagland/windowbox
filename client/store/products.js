import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'



/**
 * INITIAL STATE
 */

const defaultState = {products: []}
/**
 * ACTION CREATORS
 */
const getAllProducts = products => ({ type: GET_ALL_PRODUCTS, products })
// const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */

export const fetchAllProducts = () => {
  return dispatch => {
    axios.get('/api/product')
      .then(res => {
        console.log(res.data)
        dispatch(getAllProducts(res.data))
      })
      .catch(err => console.log(err))
  }
}

/**
 * REDUCER
 */
export default function productReducer (state = defaultState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, products: action.products}
    default:
      return state
  }
}
