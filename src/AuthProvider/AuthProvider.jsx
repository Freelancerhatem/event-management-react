// import {createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);
    // const [loading,useLoading] = useState(true)
    const createUser =(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    };
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        });
        return ()=> unSubscribe();
    },[]);
    console.log(user)

    const authInfo ={
        user,
        createUser,
        signInUser
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


