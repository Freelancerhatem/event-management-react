import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Navbar from "../../common/Navbar/Navbar";
import userphoto from '../../../assets/user.png'


const DashBoard = () => {
    const{user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
             <div  className="bg-gradient-to-tr from-orange-500 to-orange-300">
            <Navbar></Navbar>
            </div>
           
            <div className="flex flex-col items-center mt-6">
                <img className="w-28 rounded-full" src={user.photoURL == null ? userphoto : user.photoURL } alt="" />
                
                <h1 className="font-bold ">{user.displayName != null ? user.displayName : 'user_'+user.email.slice(0, 5)}</h1>
            
            </div>
            <div className=" flex flex-col items-center   mt-12">
                <div className="bg-orange-100 w-72 lg:w-96 lg:h-72 h-80 md:space-y-2 space-y-2 lg:space-y-2  rounded-md p-4">
                <h1 className=""><span className="font-bold mb-2">Email:</span> {user.email}</h1>
                <h1 className=""><span className="font-bold mb-2">Mobile:</span> {user.phoneNumber == null ? 'N/A' : user.phoneNumber}</h1>
                <h1 className=""><span className="font-bold mb-2">Address: </span>N/A</h1>
                <h1 className=""><span className="font-bold mb-2">Education: </span>N/A</h1>
                <h1 className=""><span className="font-bold mb-2">Birth Date: </span>N/A</h1>
                <h1 className=""><span className="font-bold mb-2">Nationality: </span>Bangladeshi</h1>
                <h1 className=""><span className="font-bold mb-2">Created id: </span>{user.metadata.creationTime}</h1>
                <h1 className=""><span className="font-bold mb-2">Last login: </span>{user.metadata.lastSignInTime}</h1>
                
                </div>
            </div>
        </div>
    );
};

export default DashBoard;