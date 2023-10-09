import { Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Root = () => {
    const {loading} = useContext(AuthContext);
    if(loading){
        return <div className="w-screen h-[90vh] flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>
    }
    else{

        return (
            <div>
                <Outlet></Outlet>
                
            </div>
        );
    }
};

export default Root;