import React from 'react'
import { CustomButton } from '../custom-button/custom-button';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            }
        </div>
        <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
)

const mapsStateToProp = ({ cart: { cartItems } })=>({
    cartItems
})

export default connect(mapsStateToProp)(CartDropdown)