import React from 'react'
import { CustomButton } from '../custom-button/custom-button';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selector';

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

const mapsStateToProp = state =>({
    cartItems: selectCartItems(state)
})

export default connect(mapsStateToProp)(CartDropdown)