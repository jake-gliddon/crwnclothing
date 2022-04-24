import { initializeApp } from 'firebase/app';
import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithPopup, 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged} 
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

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
      prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

  export const db = getFirestore();
  export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
      const userDocRef = doc(db, 'users', userAuth.uid)
      const userSnapshot = await getDoc(userDocRef);
      if (!userSnapshot.exists()) {
          const { displayName, email} = userAuth;
          const createdAt = new Date();

          try {
              await setDoc(userDocRef, {
                  displayName,
                  email,
                  createdAt,
                  ...additionalInformation
              });
          } catch (error) {
              console.log('There was an error creasting a user', error.message)
          }
      }
      return userDocRef
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  }

export const signInUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)