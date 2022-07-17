// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut   } from "firebase/auth";
import toast from "react-hot-toast";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

export const register = async (email, password) => {
    try{
        const {user} = await createUserWithEmailAndPassword(auth, email, password)
    return user
    } catch(error) {
        toast.error(error.message); 
    }
    
}

export const signIn = async (email,password) => {
    try{
        const {user} = await signInWithEmailAndPassword(auth,email,password)
        return user
    } catch(error){
        toast.error(error.message); 

    }
    
}

export const logOut = async () => {
    await signOut(auth)
}



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
