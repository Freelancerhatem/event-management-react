import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
import swal from 'sweetalert';

const EventCard = ({card}) => {
    const {title,img,details,price,id} = card;

    const handlePrice=()=>{
        swal("Done!", "Booking Successful!", "success");
    }
    
    
    return (
        
            <div data-aos='fade-up' data-aos-duration="500" 
             className=" flex h-[620px]   lg:h-[430px] mb-4 lg:mb-6  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className=" mx-4 mt-4 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                        src={img}
                        alt="img-blur-shadow"/>
                </div>
                <div className="p-6">
                    <h5 className="mb-2 font-fontPoppins block  text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h5>
                    
                    {
                    details.length > 200 ? <p className="block font-fontPoppins text-base font-light leading-relaxed text-inherit antialiased">
                    {details.slice(0,200)}...<Link to={`/details/${id}`}><button className='btn btn-xs btn-outline'>Read more</button></Link>
                     </p>: <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">{details}</p>
                    }
                </div>
                <div className="p-6 pt-0">
                    <button className='btn px-2 py-2 text-center rounded-md bg-gradient-to-tr from-orange-500 to-orange-300 text-white font-medium w-36 font-fontPoppins' onClick={handlePrice}>Book Now: ${price}</button>
                </div>
            </div>
        
    );
};

EventCard.propTypes = {
    card:PropTypes.object
    
};
export default EventCard;





