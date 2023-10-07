import { useContext } from 'react';
import '../Home/Home.css'
import Navbar from '../common/Navbar/Navbar';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Home = () => {
    const{name}=useContext(AuthContext);
    console.log(name)
    return (
        <div className=''>
            
            <div className="banner w-screen ">
            <Navbar className=''></Navbar>
            </div>
        </div>
    );
};

export default Home;