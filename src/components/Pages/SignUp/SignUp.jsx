import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";


const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const[error,setError] = useState('')
    
    const handleRegistration = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const passwordChecker = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*])[A-Za-z\d@#$!%^&*]{6,}$/;
        setError('');
        if(!passwordChecker.test(password)){
            setError('Check Your Password ');
            
        }
        
        else{
            createUser(email,password)
        .then(res=>{
            const user = res.user;
            console.log(user);
        })
        .catch(err=>{
            const error = err.message;
            console.log(error);
        })
        }

    }
    return (
        <div>
            <div className="bg-gradient-to-tr from-orange-500 to-orange-300">
            <Navbar></Navbar>
            </div>
            <div>                
                <div data-aos='fade-down' data-aos-duration="500" className="relative mt-20 md:mt-32 mx-auto flex w-72 md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 -mt-6 mb-4 grid h-20 lg:h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-orange-500 to-orange-300 bg-clip-border text-white shadow-lg shadow-orange-500/40">
                        <h3 className="block font-sans text-base lg:text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                            Sign Up
                        </h3>
                    </div>
                    <form onSubmit={handleRegistration}>

                        <div className="flex flex-col gap-4 p-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input name="name"
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=""
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Name
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input name="email" required
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=""
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Email
                                </label>
                            </div>
                            <div className="">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input name="password" type="password" required
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=""
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Password
                                </label>
                            </div>
                            <p className="ml-1 mt-1 text-red-600 font-bold">{error}</p>
                            </div>

                        </div>
                        <button
                            className="block w-full select-none rounded-lg bg-gradient-to-tr from-orange-500 to-orange-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="p-6 pt-0">
                        <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                            Have an account?
                            <Link to='/signin'>
                                <button

                                    className="ml-1 block font-sans text-sm font-bold leading-normal text-orange-500 antialiased"
                                >
                                    Sign In
                                </button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;