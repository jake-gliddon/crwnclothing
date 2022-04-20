import {React} from 'react'
import SignUpForm from '../../Components/SignUpForm/Signup.component'
import SignInForm from '../../Components/SignInForm/Signin.component';
import './authentication.styles.scss'


const Authentication = () => {
  return (
    <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
    </div>
  )
}

export default Authentication