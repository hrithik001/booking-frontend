import { useState ,useEffect} from "react";
import {differenceInCalendarDays} from 'date-fns'
import axios from 'axios'
import {Navigate} from 'react-router-dom'

const BookingTab = ({place}) => {



    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [numberOfGuests,setNumberOfGuests] = useState(1);
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [isDisabled,setIsDisabled] = useState(true);
    const [isBookingSuccessfull,setIsBookingSuccessfull] = useState(false);
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
            if (checkIn && checkOut && name && address && phoneNumber) {
                 setIsDisabled(false);
            } else {
                setIsDisabled(true);
            }
        }, [checkIn, checkOut, name, address, phoneNumber]);


    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\+?\d{1,3}?[-.\s]?\(?(?:\d{1,4}|\d{1,4})\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}(?: x\d{1,5})?$/;
        return phoneRegex.test(phoneNumber);
    };

    const validateBookingDetails = () => {
        
        if (!name.trim()) {
            return false; 
        }

        if (!validatePhoneNumber(phoneNumber)) {
            return false; 
        }

        return true; 
    };

    const BookPlace = async () => {
        if(!validateBookingDetails) return alert('Enter all data');
        try {
            const {data} = await axios.post('places/book',
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

              
           setIsBookingSuccessfull(true);
            
          
        } catch (error) {
            
            console.log(error)
        }
        

    }


    if(isBookingSuccessfull)
    {
        alert("Booking successfull");
        return <Navigate to={'/'} />
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
                                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Hrithik Roshan"/>
                                    </div>
                                    <div className="border-t py-3 px-4">
                                        <label> Your phone number </label>
                                        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Hrithik Roshan"/>
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