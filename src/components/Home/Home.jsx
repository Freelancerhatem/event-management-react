
import '../Home/Home.css'
import Navbar from '../common/Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';
import EventCard from '../EventCard/EventCard';
import Contact from '../Pages/Contact/Contact';
import Footer from '../common/Footer/Footer';
import FAQ from '../Pages/FAQ/FAQ';

const Home = () => {
    
    
    const cardsdata = useLoaderData([]);
    
    
    console.log(cardsdata)
   
    return (
        <div>

            <div  className="banner h-[40vh] md:h-screen max-w-full">
                
                <Navbar className=''></Navbar>
                <div className=''>
                    <h1 className='md:text-4xl text-xl lg:text-7xl font-semibold md:font-extrabold text-center mt-4 shadow-md   md:mt-36'><span className='text-orange-500'>Your Vision </span> <br /><span className='text-white'>Our Expertise</span></h1>
                </div>
            </div>
            <div className=' w-60  mx-auto mt-10'>
                <h1 className='text-center mt-0 lg:mt-4 text-4xl font-semibold border-r-4 border-orange-500'>our <span className='text-orange-500'>services</span></h1>
                
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-12 px-4 lg:px-12 mt-5 lg:mt-10 '>
                {cardsdata.map((card, index) => <EventCard key={index} card={card}></EventCard>)}
            </div>

            {/* contact form */}
            <div>
                <Contact></Contact>
            </div>
            <div data-aos='fade-up' data-duration='500'>
                
                <div className='w-60 md:w-[480px]  mx-auto my-10'>
                <h1 className='text-center mt-0 lg:mt-4 text-base md:text-4xl font-semibold border-r-4 border-orange-500'>Frequently Ask <span className='text-orange-500'>Questions</span></h1>            
                </div>
                <FAQ></FAQ>
            </div>
            <Footer></Footer>
        </div>
    );
   
};

export default Home;