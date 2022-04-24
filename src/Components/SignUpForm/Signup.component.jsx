import {createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../Utils/Firebase/Firebase.utils'
import { useState } from "react"
import Forminput from '../form-input/Forminput.component'
import './signup.styles.scss'
import Button from '../button/Button.component'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
        
    } 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert('passwords do not match');
            return;
            
        }
        
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, {displayName})
            resetFormFields();
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Email already in use, Please try again with a different email.')
            }
            console.log('User Creation encountered an error', error)
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }
    return (
        <section className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email</span>
            <form className="group"  onSubmit={handleSubmit}>
                <Forminput label='Display Name' required type='text' onChange={handleChange} name='displayName' value={displayName}/>
                <Forminput label='Email' required type='email' onChange={handleChange} name='email' value={email}/>
                <Forminput label='Password' required type='password' onChange={handleChange} name='password' value={password}/>
                <Forminput label='Confirm Password' required type='password' onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <Button type="submit">Sign up</Button>
            </form>
        </section>
    )
}

export default SignUpForm