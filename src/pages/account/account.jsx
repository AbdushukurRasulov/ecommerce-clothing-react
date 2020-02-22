import React from 'react'

import './account.styles.scss'
import SingIn from '../../components/sing-in/sing-in'
import SingUp from '../../components/sing-in/sing-up'

export const Account = () => (
    <div className="account">
        <SingIn />
        <SingUp />
    </div>
)
