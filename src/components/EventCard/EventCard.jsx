import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
const EventCard = ({card}) => {
    const {title,img,details,price,id} = card;
    return (
        
            <div data-aos='fade-up' data-aos-duration="2000" 
             className=" flex w-96 h-[430px] mb-12  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className=" mx-4 mt-4 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                        src={img}
                        alt="img-blur-shadow"/>
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h5>
                    
                    {
                    details.length > 200 ? <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {details.slice(0,200)}...<Link to={`/details/${id}`}><button className='btn btn-xs btn-outline'>Read more</button></Link>
                     </p>: <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">{details}</p>
                    }
                </div>
                <div className="p-6 pt-0">
                    <p className='px-2 py-2 text-center rounded-md bg-red-300 w-32'>Price: ${price}</p>
                </div>
            </div>
        
    );
};

EventCard.propTypes = {
    card:PropTypes.object
    
};
export default EventCard;





