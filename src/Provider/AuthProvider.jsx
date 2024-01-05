import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config';
import { signInWithPopup, GoogleAuthProvider,FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    
    // firebase register

    const createRegister = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const loginUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
     // current user info
     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(user)=>{
            console.log(user)
            setUser(user)
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }
    },[])

    // Login with google

    const googleLogin = () => {
        const provider = new GoogleAuthProvider()
        setLoading(true)
        return signInWithPopup(auth,provider);
    }

    const authInfo = {
        user,
        logOut,
        loading,
        loginUser,
        googleLogin,
        createRegister,

    }


  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider