import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart, removeFromCart, emptyCart } from '../store';

// update item quantity, remove item functionality
// implement remote item and clear cart functionality, update

class Cart extends Component {
  render() {
    const cart = this.props.inCart;
    return (
      <div>
        <h1>Your Cart</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(elem => {
                return (
                  <tr key={elem.item.id}>
                    <td>{elem.item.name}</td>
                    <td>{elem.quantity}</td>
                    <td>{`$${elem.item.price}`}</td>
                    <td>{`$${elem.quantity * elem.item.price}`}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <hr></hr>
          <p>{`Total: $${findTotal(cart)}`}</p>
        </div>
      </div>
    )
  }

}

function findTotal(array) {
  return array.reduce((sum, elem) => {
    const price = +elem.item.price;
    const quantity = +elem.quantity;
    return (
      sum + (price * quantity)
    )
  }, 0)
}

const mapState = (state) => {
  return {
    inCart: state.cartReducer.inCart
  }
}

const mapDispatch = (dispatch) => {
  return {
    addItem(item, quantity) {
      dispatch(addToCart(item, quantity));
    },
    removeItem(id, quantity) {
      dispatch(removeFromCart(id, quantity))
    },
    clearCart() {
      dispatch(emptyCart())
    }
  }
}

export default connect(mapState, mapDispatch)(Cart);
