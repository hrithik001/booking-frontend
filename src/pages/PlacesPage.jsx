import { useState } from "react";
import { Link ,Navigate,useParams } from "react-router-dom";
import Perks from "../components/Perks";
import PhotoUploader from "../components/PhotoUploader";
import axios from "axios";

const PlacesPage = () => {

    const {action} = useParams();
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [address,setAddress] = useState('');
    const [addedphotos ,setAddedPhotos] = useState([]);
    const [perks,setPerks] = useState([]);
    const [extraInfo,setExtraInfo] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [maxGuests,setMaxGuests] = useState(1);
    const [redirect,setRedirect] = useState('');


   const addNewPlace = async (e) => {
    console.log("photos",addedphotos)
    e.preventDefault();
    // setRedirect('')
    try {
        const {data} = await axios.post('/place/upload/new',{
            title,description,address,
            addedphotos,perks,extraInfo,
            checkIn,checkOut,maxGuests
        })

        setRedirect('/account/places');

        console.log(data,"successfully added")
    } catch (error) {
        console.log(error);
    }
   }

   if(redirect)
   {
    return <Navigate to={redirect} />
   }


    return (
      <div>
         {
           action !== 'new' && (
                            <div className="text-center mt-10">

                                <Link to={'new'} className="inline-flex bg-primary text-white py-3 px-6 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                    </svg>
                                    Add Places
                                </Link>

                            </div>
        
                               ) 
         }
         {
            action === 'new' && (
               <div>
                    <form onSubmit={addNewPlace}>
                        <label className="text-2xl mt-4">Name of your Home</label>
                       
                        <input 
                        type="text" 
                        placeholder="My Home"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}

                        />
                        <label className="text-2xl mt-4">Address</label>
                        <input type="text" placeholder="Address"  value={address}
                        onChange={(e)=>setAddress(e.target.value)} />
                        <label className="text-2xl mt-4">Photos</label>
                        <PhotoUploader addedphotos={addedphotos} onChange={setAddedPhotos} />
                         <label className="text-2xl mt-6">Description</label>
                        <textarea placeholder="A great place to visit..."  value={description}
                        onChange={(e)=>setDescription(e.target.value)}></textarea>
                        <label className="text-2xl mt-6">Perks</label>
                        <p className="text-gray-500 text-sm">Select all perks</p>
                        <div className="grid gris-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 my-4">
                            <Perks selected={perks} onChange={setPerks}/>
                        </div>
                        <label className="text-2xl ">Other Rule's</label>
                        <textarea  value={extraInfo}
                        onChange={(e)=>setExtraInfo(e.target.value)}></textarea>
                        <label className="text-2xl ">Check in&out time</label>
                         <p className="text-gray-500 text-sm">Adjust the time for cleaning service's</p>
                        <div className="gap-2 my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                    <h3>Check in time</h3>
                                    <input type="text" placeholder="10:00"  value={checkIn}
                            onChange={(e)=>setCheckIn(e.target.value)}/>
                                </div>
                                <div>
                                    <h3>Check out time</h3>
                                    <input type="text" placeholder="10:00"  value={checkOut}
                            onChange={(e)=>setCheckOut(e.target.value)}/>
                                </div>
                                <div>
                                    <h3>Max number of guests</h3>
                                    <input type="number" placeholder="10"  value={maxGuests}
                            onChange={(e)=>setMaxGuests(e.target.value)}/>
                                </div>
                        </div>

                        <button className="primary">Submit</button>
                    </form>
               </div>

            )

         }
      </div>
    );
}
export default PlacesPage;