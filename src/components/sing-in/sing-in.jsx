import React, { Component } from 'react'
import { FormInput } from '../form-input/form-input';

import './sing-in.stles.scss'
import { CustomButton } from '../custom-button/custom-button';
import { singInWithGoogle } from '../firebase/firebase.utils';

export default class SingIn extends Component {
    constructor() {
        super()
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

    render() {
        return (
            <div className="sing-in">
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label="email"
                        value={this.state.email}
                        handleChange={this.handleChange} />

                    <FormInput
                        type="password"
                        name="password"
                        label="password"
                        value={this.state.password}
                        handleChange={this.handleChange} />
                    <div className="buttons">
                        <CustomButton type="submit">Sing In</CustomButton>
                        <CustomButton onClick={singInWithGoogle} isGoogleSingIn >Sing In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
