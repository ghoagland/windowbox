import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCurrentReviews } from '../store'

class ProductReviews extends Component {
  
  componentDidMount () {
    const currentId = this.props.id
    this.props.loadProductReviews(currentId)
  }

  render () {
    const productReviews = this.props.currentReviews
    return (
      <div>
        <h3>Reviews</h3>
        <ol className='reviews'>
          {
            productReviews && productReviews.map(review =>
              <li key={review.id}>{review.stars
                  } stars: {review.text} </li>)
          }
        </ol>
      </div>
    )
  }

}

const mapState = state => {
  return {
    currentReviews: state.reviewReducer.currentReviews
  }
}

const mapDispatch = dispatch => {
  return {
    loadProductReviews (productId) {
      dispatch(fetchCurrentReviews(productId))
    }
  }
}

export default connect(mapState, mapDispatch)(ProductReviews)
