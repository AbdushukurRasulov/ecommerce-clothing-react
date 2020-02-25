import React from 'react'

import './custom-button.styles.scss'

export const CustomButton = ({ children, isGoogleSingIn, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSingIn ? 'google-sing-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)
