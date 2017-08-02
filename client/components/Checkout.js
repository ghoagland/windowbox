import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export default class Checkout extends Component {
    render() {
        return (
            <form id='address-form'>
                <div className="row center-block">
                    <div className="col-md-4">
                        <h4>Shipping Information:</h4>
                        <br />
                        <div>
                            <label>Street 1</label>
                            <input type='text' name='street1' />
                        </div>
                        <div>
                            <label>City</label>
                            <input type='text' name='city' />
                        </div>
                        <div>
                            <label>State</label>
                            <input type='text' name='state' />
                        </div>
                        <div>
                            <label>Zip Code</label>
                            <input type='text' name='zipcode' />
                        </div>
                        <br />
                    </div>
                    <div className="col-md-4">
                        <h4>Payment Information</h4>
                        <br />
                        <div>
                            <label>Card Type</label>
                            <select type='text' name='card-type' >
                                <option>Visa</option>
                                <option>MasterCard</option>
                                <option>American Express</option>
                            </select>
                        </div>
                        <div>
                            <label>Credit Card Number</label>
                            <input type='text' name='ccn' />
                        </div>
                        <div>
                            <label>Card Security Code</label>
                            <input type='text' name='ccn' />
                        </div>
                        <br />
                    </div>
                    <div className="col-md-4">
                        <h4>Email for Confirmation</h4>
                        <br />
                        <div>
                            <label>Email</label>
                            <input type='text' name='email' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <center>
                            <button className="btn btn-success" type='submit'>Submit Order</button>
                        </center>
                    </div>
                </div>
            </form>
        )
    }
}
