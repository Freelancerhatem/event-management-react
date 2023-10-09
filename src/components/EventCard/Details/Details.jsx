import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Details = () => {
    const cardDetails = useLoaderData([])
    const {id} = useParams();
    const {loading} = useContext(AuthContext);
    

    if(loading){
        return <div className="w-screen h-[90vh] flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>
    }
    const detailsdata = cardDetails.find(Data=>Data.id==id);
    const{title,details,img} = detailsdata;

    return (
        <div>
            <div className="bg-gradient-to-tr from-orange-500 to-orange-300 fixed w-full top-0"><Navbar></Navbar></div>
            <div className="mt-12 md:mt-32 px-4 md:px-0">
                <img src={img} className="md:w-1/2 mx-auto rounded" alt="" />
                <h2 className="text-base lg:text-2xl font-bold text-center mt-4">{title}</h2>
                <p className="px-4 lg:px-96 lg:text-start text-xs text-center lg:text-lg">{details}</p>
            </div>
            <div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Details;