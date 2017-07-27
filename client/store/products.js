import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'



/**
 * INITIAL STATE
 */
const defaultProducts = []

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
        dispatch(getAllProducts(res.data || defaultProducts))

      })
      .catch(err => console.log(err))

  }
}

/**
 * REDUCER
 */
export default function productReducer(state = defaultProducts, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.products
    default:
      return state
  }
}
