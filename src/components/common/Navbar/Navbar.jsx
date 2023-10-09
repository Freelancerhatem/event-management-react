import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext)
  const handleSignOut = () => {
    signOutUser()
      .then()
      .catch(err => {
        const error = err.message;
        console.log(error)
      })
  }
  return (
    <div>
      <div>

        <nav className="md:bg-transparent bg-orange-300  dark:bg-gray-900">
          <div className=" flex  flex-wrap items-center justify-between mx-auto py-1 lg:py-4 px-2 md:px-2 lg:px-12">
            {/* small device nav */}

            <div className="dropdown md:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/signin'>Sign In</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/dashboard'>DashBoard</Link></li>
              </ul>
            </div>

            <div className="hidden md:block">
              <span className="flex items-center">
                <Link to='/'>
                  <img src="https://i.ibb.co/WkZFKJC/logo.png" className="h-4 md:h-8 mr-1 lg:mr-3" alt=" Logo" />
                </Link>
                <span className="self-center text-base lg:text-2xl font-semibold whitespace-nowrap text-white">Elite Events</span>
              </span>
            </div>
            <div className="order-2">
              {
                user ?
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1"><img className="rounded-full w-4 lg:w-12" src={user.photoURL != null ? user.photoURL : '/src/assets/user.png'} alt="" /> <h1 className="font-medium text-xs lg:text-base text-white">{user.displayName != null ? user.displayName : 'user_' + user.email.slice(0, 5)}</h1></div>
                    <button onClick={handleSignOut} className="btn-xs rounded-md lg:btn bg-white text-orange-400 hover:bg-orange-400 hover:text-white">Log Out</button>
                  </div>
                  : <Link to='/signin'>
                    <button className="btn-xs rounded-md md:btn bg-white text-orange-400 hover:bg-orange-400 hover:text-white">Sign in</button>
                  </Link>
              }
            </div>
            <div className="items-center hidden justify-between  w-full md:flex  md:w-auto " id="navbar-cta">
              <ul className="flex    font-medium  lg:p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <NavLink to='/' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "border-b-2 border-white" : ""
                }>
                  <li>

                    <button className="block py-2 pl-1 lg:pl-3 lg:pr-4 text-white  rounded" aria-current="page">Home</button>
                  </li>
                </NavLink>

                <NavLink to='/signin' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "border-b-2 border-white" : ""
                }>
                  <li>

                    <button className="block py-2 pl-1 lg:pl-3 lg:pr-4 text-white  rounded" aria-current="page">Sign In</button>
                  </li>
                </NavLink>
                <NavLink to='/signup' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "border-b-2 border-white" : ""
                }>
                  <li>

                    <button className="block py-2 pl-1 lg:pl-3 lg:pr-4 text-white  rounded" aria-current="page">Sign Up</button>
                  </li>
                </NavLink>
                <NavLink to='/dashboard' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "border-b-2 border-white" : ""
                }>
                  <li>

                    <button className={'block py-2 pl-1 lg:pl-3 lg:pr-4 text-white  rounded'} aria-current="page">Dashboard</button>
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