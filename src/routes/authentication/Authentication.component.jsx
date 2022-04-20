import {React} from 'react'
import {signInWithGooglePopup, createUserDocFromAuth } from '../../Utils/Firebase/Firebase.utils'
import SignUpForm from '../../Components/SignUpForm/Signup.component'
import Button from '../../Components/button/Button.component';
import SignInForm from '../../Components/SignInForm/Signin.component';


const Authentication = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user)
    }



  return (
    <div >
    <div >
        <h1>
            signin (PLEASE DO NOT USE AT THE MOMENT AS DB IS LIVE)
        </h1>
            <SignInForm />
    </div>
        <div>
            <SignUpForm />
        </div>
    </div>
  )
}

export default Authentication