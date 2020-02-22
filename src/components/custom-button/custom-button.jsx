import React from 'react'

import './custom-button.styles.scss'

export const CustomButton = ({ children, isGoogleSingIn, ...otherProps }) => (
    <button className={`${isGoogleSingIn ? 'google-sing-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)
