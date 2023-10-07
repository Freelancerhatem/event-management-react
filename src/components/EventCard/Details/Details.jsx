import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../common/Navbar/Navbar";


const Details = () => {
    const cardDetails = useLoaderData()
    const {id} = useParams();
    console.log(id,cardDetails)

    const detailsdata = cardDetails.find(Data=>Data.id==id);
    const{title,details,img} = detailsdata;

    return (
        <div>
            <div className="bg-gray-300 fixed w-full top-0"><Navbar></Navbar></div>
            <div className="mt-32">
                <img src={img} className="w-6/12 mx-auto rounded" alt="" />
                <h2 className="text-2xl font-bold text-center mt-4">{title}</h2>
                <p className="px-96 text-start text-lg">{details}</p>
            </div>
        </div>
    );
};

export default Details;