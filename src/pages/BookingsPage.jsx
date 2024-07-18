import { useEffect, useState } from 'react';
import AccountNav from '../components/AccountNav.jsx'
import axios from 'axios'
import { differenceInCalendarDays, differenceInDays, format } from 'date-fns';
import { Link ,Navigate} from 'react-router-dom';
import { CLOUDINARY_URL } from '../secret.js';
const BookingsPage = () => {

    const [bookings,setBookings] = useState([]);

    useEffect(() => {
        axios.get('/users/bookings').then(res => {
            setBookings(    res.data);
            console.log(bookings);
        })

    },[])
    
    return (
        <>
        <AccountNav />
        {
            <div className="mt-4">
               {
                bookings?.length > 0 ? (bookings.map((eachBooking,index) => (
                  <Link to={`/account/bookings/${eachBooking._id}`} className="flex bg-gray-100 p-4 rounded-2xl gap-4 cursor-pointer my-4" key={eachBooking._id}>
                    <div className="w-32 h-32 flex  bg-gray-300 grow-0 shrink-0">
                        {
                          eachBooking.place.photos?.length > 0 && (
                         
                            <img className="object-cover" src={`${CLOUDINARY_URL}/${eachBooking.place.photos[0]}`} alt={eachBooking.place.photos[0]} />
                          )
                        }
                    </div>
                    <div className="grow-0 shrink ">
                        <h2 className="text-xl  font-medium">
                          {eachBooking.place.title}
                        </h2>
                          
                        <div className=" border-gray-300 mt-4 py-2 font-medium border-t flex gap-2 text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                          </svg>

                           {differenceInCalendarDays(new Date(eachBooking.bookingTo),new Date(eachBooking.bookingFrom))}  Nights |
                          <div className="flex gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                              <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                            </svg>

                                {format(new Date(eachBooking.bookingFrom),'dd-mm-yyyy')}  

                          </div>
                          &rarr; 
                          <div className="flex gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                              <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                            </svg>

                            {format(new Date(eachBooking.bookingTo),'dd-mm-yyyy')}
                          </div>
                        </div>
                        <div className='text-xl font-medium mt-2 flex'>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 me-2">
                                <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
                                <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                              </svg>


                            Total price : {`₹ ${eachBooking.totalPrice}`}
                        </div>
                    </div>
                  </Link>
                ))) : (
                  <div className='h-screen flex items-center justify-center'>
                    <div className='h-2/4 w-2/4  text-center   gap-4'>
                      <span className='font-semibold text-3xl'>Not booked yet !!</span> 
                     <Link to={'/'} className='bg-primary p-2 rounded-full w-full text-white text-2xl ms-3 px-6'>Click here to book</Link>
                    </div>
                  </div>

                )
               }
            </div>
        }
        </>
    );
}

export default BookingsPage;
