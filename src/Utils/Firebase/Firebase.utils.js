import { initializeApp } from 'firebase/app';
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider} 
    from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJG_JzASusA1YWbWdMBos_ZEPee-IzDcA",
    authDomain: "silver-crown-db.firebaseapp.com",
    projectId: "silver-crown-db",
    storageBucket: "silver-crown-db.appspot.com",
    messagingSenderId: "752082200489",
    appId: "1:752082200489:web:08e5e228e8f393063d46b8"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();
  export const createUserDocFromAuth = async (userAuth) => {
      const userDocRef = doc(db, 'users', userAuth.uid)
      const userSnapshot = await getDoc(userDocRef);
      if (!userSnapshot.exists()) {
          const { displayName, email} = userAuth;
          const createdAt = new Date();

          try {
              await setDoc(userDocRef, {
                  displayName,
                  email,
                  createdAt
              });
          } catch (error) {
              console.log('There was an error creasting a user', error.message)
          }
      }
      return userDocRef
  }