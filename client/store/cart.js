import axios from 'axios';

//DEFAULT STATE
const defaultState = {inCart: []}; // initial state could be an empty array; every new state returned can be a new array
//inCart elements are objs with an item prop and a quantity prop

// if cart is refactored to be an object, lodash has a function that maps over objects

//ACTION TYPES

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const EMPTY_CART = 'EMPTY_CART';


//ACTION CREATORS

export const addToCart = (item, quantity = 1) => ({type: ADD_TO_CART, item, quantity: +quantity });
export const removeFromCart = (id, quantity = 1) => ({type: REMOVE_FROM_CART, id, quantity: +quantity});

export const emptyCart = () => ({type: EMPTY_CART});

//REDUCER
export default function cartReducer (state = defaultState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const idx = state.inCart.findIndex(elem => (elem.item.id === action.item.id))
        if (idx >= 0) {
          const addedState = {...state}; // when using spread: what are the actual properties that are being put in here?
          addedState.inCart[idx].quantity = state.inCart[idx].quantity + action.quantity
          return addedState
        } else {
          return {
            ...state,
            inCart: [
              ...state.inCart,
              { item: action.item, quantity: action.quantity }
            ]
          }
        }
    case REMOVE_FROM_CART:
      const index = state.inCart.findIndex(elem => (elem.item.id === action.id))
      if (index === -1) {throw new Error ('Item not in cart')} // log out the error here instead of throwing an error; implement error message in the UI
      else if (state.inCart[index].quantity < action.quantity) {
        throw new Error ('Removing greater quantity than in cart')
      } else {
        const removedState = {...state}
        removedState.inCart[index].quantity = state.inCart[index].quantity - action.quantity;
        return removedState;
      }

    case EMPTY_CART:
      return {...state, inCart: []}

    default:
      return state;
  }
}
