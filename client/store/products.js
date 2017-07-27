import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_CURRENT_PRODUCT = 'GET_CURRENT_PRODUCT'



/**
 * INITIAL STATE
 */

const defaultState = {products: [], currentProduct: {}};
/**
 * ACTION CREATORS
 */
const getAllProducts = products => ({ type: GET_ALL_PRODUCTS, products })
const getCurrentProduct = product => ({type: GET_CURRENT_PRODUCT, currentProduct: product})

/**
 * THUNK CREATORS
 */

export const fetchAllProducts = () => {
  return dispatch => {
    axios.get('/api/product')
      .then(res => {
        dispatch(getAllProducts(res.data))
      })
      .catch(err => console.log(err))
  }
}

export const fetchCurrentProduct = (id) => {
  return dispatch => {
    axios.get(`/api/product/${id}`)
      .then(res => {
        dispatch(getCurrentProduct(res.data))
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
    case GET_CURRENT_PRODUCT:
      return {...state, currentProduct: action.currentProduct}
    default:
      return state
  }
}
