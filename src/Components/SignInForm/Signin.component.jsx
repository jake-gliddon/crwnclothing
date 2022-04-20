import {signInWithGooglePopup } from '../../Utils/Firebase/Firebase.utils'
import { createUserDocFromAuth, signInUserWithEmailAndPassword } from '../../Utils/Firebase/Firebase.utils'
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

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
           const response = await signInUserWithEmailAndPassword(email, password)
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                  alert('incorrect password for email');
                  break;
                case 'auth/user-not-found':
                  alert('no user associated with this email');
                  break;
                default:
                  console.log(error);
              }
            
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }
    return (
        <section className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign In</span>
            <form className="group"  onSubmit={handleSubmit}>
                <Forminput label='Email' required type='email' onChange={handleChange} name='email' value={email}/>
                <Forminput label='Password' required type='password' onChange={handleChange} name='password' value={password}/>
                <div className='buttons-container'>
                <Button buttonType='inverted' type="submit">Sign In</Button>
                <Button buttonType='google' onClick={logGoogleUser}>Google Sign In</Button>
                </div>
            </form>
        </section>
    )
}

export default SignInForm