import {createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../Utils/Firebase/Firebase.utils'
import { useState } from "react"
import Forminput from '../form-input/Forminput.component'
import './signin.styles.scss'
import Button from '../button/Button.component'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);

    } 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== {}) {
            alert('passwords do not match');
            return;
            
        }
        
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, {})
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
            <span>Sign In</span>
            <form className="group"  onSubmit={handleSubmit}>
                <Forminput label='Email' required type='email' onChange={handleChange} name='email' value={email}/>
                <Forminput label='Password' required type='password' onChange={handleChange} name='password' value={password}/>
                <Button buttonType='inverted' type="submit">Sign In</Button>
                <Button buttonType='google' type="submit">Sign In with Google</Button>
            </form>
        </section>
    )
}

export default SignInForm