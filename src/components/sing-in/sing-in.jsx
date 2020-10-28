import React, { useState } from 'react'

import { FormInput } from '../form-input/form-input';
import { CustomButton } from '../custom-button/custom-button';

import { auth, singInWithGoogle } from '../../firebase/firebase.utils';

import './sing-in.styles.scss'

const SingIn = () =>  {

    const handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        } catch (error){
            console.log(error)
        }
    }

    const handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };


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
export default SingIn;