import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchAllProducts } from '../store'

class AllProducts extends Component {

    componentDidMount() {
        this.props.loadProducts()
    }

    render() {
        if (this.props.products) {
            return (
            <div className="products" >
                {this.props.products.map(product => (
                    <div key={product.id} className="row">

                        <div className="card">
                            <Link to={`/products/${product.id}`}>
                                <div className="col-xs-10">
                                    <img src={product.imgUrl} alt="Avatar" style={{ width: 90 + '%' }}></img>
                                    <h4><b>{product.name}</b></h4>
                                    <h4><b>{`$${product.price}`}</b></h4>
                                </div>
                            </Link>
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
