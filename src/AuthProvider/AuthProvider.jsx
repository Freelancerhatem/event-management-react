// import {createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider,createUserWithEmailAndPassword,signOut ,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    
    const[user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const createUser =(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    };
    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }
    const signOutUser =()=>{
        setLoading(true)
       return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unSubscribe();
    },[]);
    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        googleLogin,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.any
    
};
export default AuthProvider;


