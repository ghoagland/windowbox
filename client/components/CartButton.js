import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

export default function CartButton() {
    var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    return (
        <div>
            <form>
                <select>
                    {
                        arr.map(number =>
                            <option key={number}>{number}</option>
                        )
                    }
                </select>
                <button type="button">Add To Cart</button>
            </form>
        </div>
    )

}
