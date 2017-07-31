import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */

const GET_CURRENT_REVIEWS = 'GET_CURRENT_REVIEWS'



/**
 * INITIAL STATE
 */

const defaultState = { currentReviews: [] }
/**
 * ACTION CREATORS
 */

const getCurrentReviews = reviews => ({type: GET_CURRENT_REVIEWS, currentReviews: reviews})

/**
 * THUNK CREATORS
 */
export const fetchCurrentReviews = (productId) => {
  return dispatch => {
    axios.get(`/api/products/${productId}/reviews`)
      .then(res => {
        dispatch(getCurrentReviews(res.data))
      })
      .catch(err => console.log(err))
  }
}

/**
 * REDUCER
 */
export default function reviewReducer (state = defaultState, action) {
  switch (action.type) {
    case GET_CURRENT_REVIEWS:
      return {...state, currentReviews: action.currentReviews}
    default:
      return state
  }
}
