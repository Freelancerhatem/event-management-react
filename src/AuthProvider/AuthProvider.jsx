// import {createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const createUser =(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo ={
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


