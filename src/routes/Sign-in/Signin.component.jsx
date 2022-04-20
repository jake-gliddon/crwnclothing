import React from 'react'
import { signInWithGooglePopup, createUserDocFromAuth } from '../../Utils/Firebase/Firebase.utils'

const Signin = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user)
    }
  return (
    <div>
        <h1>
            signin
        </h1>
        <button onClick={logGoogleUser}>
            Sign in with Google (pop-up)
        </button>
    </div>
  )
}

export default Signin