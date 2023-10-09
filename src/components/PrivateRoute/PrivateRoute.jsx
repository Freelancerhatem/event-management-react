import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext);
    const location =useLocation();

    
    
    if(loading)
    {
       return <div className="w-screen h-[90vh] flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>
        
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.state} to='/signin'>
            
        </Navigate>
    );
};
PrivateRoute.propTypes = {
    children:PropTypes.node
}

export default PrivateRoute;