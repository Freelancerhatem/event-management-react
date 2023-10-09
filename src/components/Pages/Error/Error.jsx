import { Link } from "react-router-dom";


const Error = () => {

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-bold">NO DATA FOUND</h1>
            <Link to='/'><button className="btn bg-orange-500 text-white hover:bg-orange-100 hover:text-orange-500 text-center">go to homepage</button></Link>
            </div>
        </div>
    );
};

export default Error;