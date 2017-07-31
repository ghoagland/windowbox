import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart } from '../store';
import history from '../history';

export class CartButton extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select name="itemQuantity" >
                        {
                            arr.map(number =>
                                <option key={number}>{number}</option>
                            )
                        }
                    </select>
                    <button type="submit">Add To Cart</button>
                </form>
            </div>
        )

    }

    handleSubmit(event){
        event.preventDefault();
        this.props.addItem(event.target.itemQuantity.value)
        history.push('/cart');
    }
}

const mapState = function (state, ownProps){
    return {
        inCart: state.cartReducer.inCart,
        currentProduct: ownProps.currentProduct
    }
}

const mapDispatch = function (dispatch, ownProps){
    return {
        addItem(quantity){
            dispatch(addToCart(ownProps.currentProduct, quantity));
        }
    }
}

export default connect(mapState, mapDispatch)(CartButton);
