import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCurrentProduct} from '../store'

class SingleProduct extends Component {
  componentDidMount() {
    const currentId = +this.props.match.params.productId
    this.props.loadSingleProduct(currentId)
  }

  render () {
    const product = this.props.currentProduct;
    return (
      <div>
        <img src={product.image} />
        <h1>{product.name}</h1>
        <h2>{`$${product.price}`}</h2>
        <p>{product.description}</p>
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
