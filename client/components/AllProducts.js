import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { fetchAllProducts } from '../store'

class AllProducts extends Component {

    componentDidMount() {
        console.log(this.props)
        this.props.loadProducts()
    }

    render() {
        if (this.props.products) {
            return (
            <div>    
                {this.props.products.map(product => (
                    <div className="row">

                        <div className="card">
                            <div className="col-xs-10">
                                <img src={product.image} alt="Avatar" style={{ width: 100 + '%' }}></img>
                                <h4><b>{product.name}</b></h4>
                                <h4><b>{`$${product.price}`}</b></h4>
                            </div>
                        </div>

                    </div>
                ))
            }
            </div>
            )
        }
        else {
            return (
                <h1>not found</h1>
            )
        }
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadProducts() {
            dispatch(fetchAllProducts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
