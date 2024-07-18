import { useState ,useEffect, useContext} from "react";
import {differenceInCalendarDays} from 'date-fns'
import axios from 'axios'
import {Navigate} from 'react-router-dom'
import { UserContext } from "../context/UserContext";

const BookingTab = ({place}) => {

    axios.defaults.withCredentials = true;



    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [numberOfGuests,setNumberOfGuests] = useState(1);
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [isDisabled,setIsDisabled] = useState(true);
    const [navigate,setNavigate] = useState(false);
    const {user} = useContext(UserContext);


    let totalCost = 0;

    // console.log("current price",place._id)
    
    if (checkIn && checkOut) {
        const days = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
        if (days <= 0) {
        alert("Wrong selection of date");
        setCheckIn("");
        setCheckOut("");
        }

        totalCost = days * place.price * numberOfGuests;
    }
     useEffect(() => {
        
            if (checkIn && checkOut  && address && phoneNumber) {
                 setIsDisabled(false);
            } else {
                setIsDisabled(true);
            }

            if(user){
                setName(user.name);
            }

        }, [checkIn, checkOut, address, phoneNumber,user]);


    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\+?\d{1,3}?[-.\s]?\(?(?:\d{1,4}|\d{1,4})\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}(?: x\d{1,5})?$/;
        return phoneRegex.test(phoneNumber);
    };

    const validateBookingDetails = () => {
       
        if (!validatePhoneNumber(phoneNumber)) {
            return false; 
        }

        return true; 
    };

    const BookPlace = async () => {
        if (!user)
        {
            alert("Please login to book the place");
            setNavigate('/login');
            return ;
            
        }
        if(!validateBookingDetails) return alert('Enter all data');
        try {
            const response = await axios.post('places/book',
                            {
                            name: name,
                            bookingFrom: checkIn,
                            bookingTo: checkOut,
                            address: address,
                            phoneNumber: phoneNumber,
                            placeId: place._id,
                            numberOfGuests: numberOfGuests,
                            totalPrice: totalCost,
                            }
                            
                        );

            const bookingId = response.data._id
            console.log(bookingId);
           setNavigate(`/account/bookings/${bookingId}`);
            
          
        } catch (error) {
            
            console.log(error)
        }
        

    }


    if(navigate)
    {
        
        return <Navigate to={navigate} />
    }

    return (
        <>
        <div className="text-2xl text-center font-semibold">
                     Price: &#8377;{place.price} / per night
                   </div>
                   <div className="border  rounded-2xl mt-4">
                        <div className="flex justify-around">
                             <div className="my-4  py-4 px-4 rounded-xl ">
                                <label > Check in :</label>
                                <input type="date" className="bg-transparent" value={checkIn} onChange={(e)=> setCheckIn(e.target.value)}/>
                             </div>
                            <div className="my-4 py-4 px-4 rounded-xl ">
                                    <label > Check out :</label>
                                    <input type="date" className="bg-transparent"  value={checkOut} onChange={(e)=> setCheckOut(e.target.value)}/>
                            </div>
                        </div>
                        <div className="border-t py-3 px-4">
                            <label> Number of guests: </label>
                            <input type="number" value={numberOfGuests} onChange={(e) => setNumberOfGuests((e.target.value > 0)?(e.target.value):1)}/>
                        </div>
                        {
                            (checkIn && checkOut) && (
                                <div>
                                    <div className="border-t py-3 px-4">
                                        <label> Your name </label>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Hrithik Roshan"/>
                                    </div>
                                    <div className="border-t py-3 px-4">
                                        <label> Your address </label>
                                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="New Delhi"/>
                                    </div>
                                    <div className="border-t py-3 px-4">
                                        <label> Your phone number </label>
                                        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="+91 5683XXXXXX"/>
                                    </div>
                                </div>
                            )
                        }
                   </div>
                  <button className={`${isDisabled?'secondary':'primary'} mt-2 font-semibold `} disabled={isDisabled} onClick={BookPlace} >  Book {(totalCost > 0) && `₹ ${totalCost}`}</button>
        </>
    );
}
export default BookingTab