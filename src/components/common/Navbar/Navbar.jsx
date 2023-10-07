import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="">
                
<nav className="bg-transparent dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div className="order-2">
        <Link to='/signin'>
            <button className="btn bg-white text-black hover:bg-black hover:text-white">Sign in</button>
        </Link>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col  font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    <NavLink to='/' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b border-red-400" : ""
  }>
      <li>

        <button  className="block py-2 pl-3 pr-4 text-white  rounded" aria-current="page">Home</button>
      </li>
        </NavLink>
    <NavLink to='/details' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b border-red-400" : ""
  }>
      <li>

        <button  className="block py-2 pl-3 pr-4 text-white  rounded" aria-current="page">Details</button>
      </li>
        </NavLink>
    <NavLink to='/signin' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b border-red-400" : ""
  }>
      <li>

        <button  className="block py-2 pl-3 pr-4 text-white  rounded" aria-current="page">Sign In</button>
      </li>
        </NavLink>
    <NavLink to='/signup' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b border-red-400" : ""
  }>
      <li>

        <button  className="block py-2 pl-3 pr-4 text-white  rounded" aria-current="page">Sign Up</button>
      </li>
        </NavLink>
    </ul>
  </div>
  </div>
</nav>

            </div>
        </div>
    );
};

export default Navbar;