import { Link } from "react-router-dom";


const Error = () => {

    return (
        <div className="w-screen h-screen bg-orange-100 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-bold">NO DATA FOUND</h1>
            <Link to='/'><button className="btn btn-outline text-center">go to homepage</button></Link>
            </div>
        </div>
    );
};

export default Error;