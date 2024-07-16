import { useParams } from "react-router-dom";
import AccountNav from '../components/AccountNav.jsx'
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceGallery from "../components/PlaceGallery.jsx";
import { differenceInCalendarDays } from "date-fns";
import { format } from "date-fns";

const BookingPage = () => {
    const {id} = useParams();
    const [booking,setBooking] = useState(null);

    useEffect(() => {
        axios.get(`/users/bookings/${id}`).then(({data}) => {
            setBooking(data[0]);
        })
    },[id]);

    if(!booking)
    {
        return <div>Loading...</div>
    }
    return (
       <>
       
        <div className="grid items-center   h-screen">
            <div className="flex  h-4/5">
                <div className="w-3/4">
                  <PlaceGallery place={booking.place} />
                </div>
                <div className="w-2/4  p-8">
                    <h1 className="text-3xl">{booking.place.title}</h1>
                     <a target="_blank" className="font-semibold underline gap-2 my-2 flex" href={`https://maps.google.com/?q=${booking.place.address}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                            </svg>
                            {booking.place.address}
                        </a>
                    <div className="bg-gray-300  mt-8 rounded-2xl p-8  flex justify-between">
                        <div className="  p-6 items-center">
                            <h2 className="text-2xl">My Booking Details</h2>
                        
                            <div className=" border-gray-300  py-2 font-medium border-t flex gap-2 text-gray-500 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                            </svg>

                            {differenceInCalendarDays(new Date(booking.bookingTo),new Date(booking.bookingFrom))}  Nights |
                            <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                </svg>

                                    {format(new Date(booking.bookingFrom),'dd-mm-yyyy')}  

                            </div>
                            &rarr; 
                            <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                </svg>

                                {format(new Date(booking.bookingTo),'dd-mm-yyyy')}
                            </div>
                            </div>
                        </div>
                        <div className='bg-primary p-6 text-white rounded-2xl'>
                            <div>
                                Total price
                            </div>
                            <div className="text-3xl">
                                 {`₹${booking.totalPrice}`}
                            </div>


                           
                        </div>
                    </div>

                </div>
            </div>

        </div>
       
       </>
    );
}

export default BookingPage;
