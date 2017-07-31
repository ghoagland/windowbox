import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCurrentProduct} from '../store'
import CartButton from './CartButton'

class SingleProduct extends Component {
  componentDidMount() {
    const currentId = +this.props.match.params.productId
    this.props.loadSingleProduct(currentId)
  }

  render () {
    const product = this.props.currentProduct;
    return (
      <div className="product-container">
        <div className="product-col-1">
          <img className="product-img" src={product.imgUrl} />
        </div>
        <div className="product-info product-col-2">
          <h1>{product.name}</h1>
          <h2>{`$${product.price}`}</h2>
          <p>{product.description}</p>
          <CartButton/>
        </div>
      </div>
    )
  }

}

const mapState = state => {
  return {
    currentProduct: state.productReducer.currentProduct
  }
}

const mapDispatch = dispatch => {
  return {
    loadSingleProduct(id) {
      dispatch(fetchCurrentProduct(id))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
