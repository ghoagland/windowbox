import React, {Component} from 'react'
import {connect} from 'react-redux'
import store, {fetchAllProducts} from '../store'

class AllProducts extends Component {

    componentDidMount (){
        const allProductsThunk = fetchAllProducts()
        store.dispatch(allProductsThunk)
    }

    render(){
        return (
            <div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products
    }
}

export default connect(mapStateToProps)(AllProducts)
