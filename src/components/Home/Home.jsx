import { useContext } from 'react';
import '../Home/Home.css'
import Navbar from '../common/Navbar/Navbar';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import EventCard from '../EventCard/EventCard';

const Home = () => {
    const { name } = useContext(AuthContext);
    console.log(name);
    const cardsdata = useLoaderData();
    return (
        <div className=''>

            <div  className="banner max-w-full">
                <Navbar className=''></Navbar>
            </div>
            <div className=''>
                <h1 className='text-center mt-4 text-4xl font-semibold '>Our services</h1>
                <hr className='w-32 mt-2  mx-auto' />
            </div>
            <div  className='grid grid-cols-3 px-10'>
                {cardsdata.map((card, index) => <EventCard key={index} card={card}></EventCard>)}
            </div>
        </div>
    );
};

export default Home;