// import {createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword,signOut ,onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth";


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    
    const[user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const createUser =(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    };
    const signOutUser =()=>{
       return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unSubscribe();
    },[]);
    console.log(user)

    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
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


