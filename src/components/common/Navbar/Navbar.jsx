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

        <nav className="bg-transparent  dark:bg-gray-900">
          <div className=" flex  flex-wrap items-center justify-between mx-auto py-1 lg:py-4 px-2 lg:px-12">
            <span  className="flex items-center">
              <Link to='/'>
              <img src="/src/assets/logo.png" className="h-4 md:h-8 mr-1 lg:mr-3" alt=" Logo" />
              </Link>
              <span className="self-center text-base lg:text-2xl font-semibold whitespace-nowrap text-white">Elite Events</span>
            </span>
            <div className="order-2">
              {
                user ?
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1"><img className="rounded-full w-4 lg:w-12" src={user.photoURL != null ? user.photoURL : '/src/assets/user.png'} alt="" /> <h1 className="font-medium text-xs lg:text-base text-white">{user.displayName != null ? user.displayName : user.email.slice(0, 5)}</h1></div>
                    <button onClick={handleSignOut} className="btn-xs rounded-md md:btn bg-white text-orange-400 hover:bg-orange-400 hover:text-white">Log Out</button>
                  </div>
                  : <Link to='/signin'>
                    <button className="btn-xs rounded-md md:btn bg-white text-orange-400 hover:bg-orange-400 hover:text-white">Sign in</button>
                  </Link>
              }
            </div>
            <div className="items-center hidden justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-cta">
              <ul className="flex  flex-col  font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <NavLink to='/' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "border-b-2 border-white" : ""
                }>
                  <li>

                    <button className="block py-2 pl-3 pr-4 text-white  rounded" aria-current="page">Home</button>
                  </li>
                </NavLink>

                <NavLink to='/signin' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "border-b-2 border-white" : ""
                }>
                  <li>

                    <button className="block py-2 pl-3 pr-4 text-white  rounded" aria-current="page">Sign In</button>
                  </li>
                </NavLink>
                <NavLink to='/signup' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "border-b-2 border-white" : ""
                }>
                  <li>

                    <button className="block py-2 pl-3 pr-4 text-white  rounded" aria-current="page">Sign Up</button>
                  </li>
                </NavLink>
                <NavLink to='/booking' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "border-b-2 border-white" : ""
                }>
                  <li>

                    <button className={user? 'block py-2 pl-3 pr-4 text-white  rounded' : 'hidden'} aria-current="page">Booking</button>
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