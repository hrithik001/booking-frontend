
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Perks from "../components/Perks";
import PhotoUploader from "../components/PhotoUploader";
import axios from "axios";
import AccountNav from "../components/AccountNav";

axios.defaults.withCredentials = true;


const AddNewPlaceForm = () => {

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
    const [price,setPrice] = useState(0);

    const {id} = useParams();

    useEffect(() => {
        if(!id)   return ;
        console.log(id);
            axios.get(`places/${id}`).then(({data}) => {
                console.log(data)
                setTitle(data.title);
                setDescription(data.description);
                setAddress(data.address);
                setPerks(data.perks);
                setExtraInfo(data.extraInfo);
                setCheckIn(data.checkIn);
                setCheckOut(data.checkOut);
                setMaxGuests(data.maxGuests);
                setAddedPhotos(data.photos);
                setPrice(data.price);
                })
                .catch(err => {
                    console.log(err)
                })
               

              
   },[id]);

   const savePlaceData = async (e) => {
    console.log("photos",addedphotos)
    e.preventDefault();
    const placeData = {title,description,address,price,
            addedphotos,perks,extraInfo,
            checkIn,checkOut,maxGuests}
    if(id){

         // setRedirect('')
    try {
        const {data} = await axios.put(('/places/'+id), placeData )

        setRedirect('/account/places');

        console.log(data,"successfully updated")
    } catch (error) {
        console.log(error);
    }

    }else{
         // setRedirect('')
        try {
            const {data} = await axios.post('/places', placeData )

            setRedirect('/account/places');

            console.log(data,"successfully added")
        } catch (error) {
            console.log(error);
        }
    }

   }

   if(redirect)
   {
    return <Navigate to={redirect} />
   }


   

    return (
        <div>
            <AccountNav/>
                    <form onSubmit={savePlaceData}>
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
                        <p className="text-gray-500 text-sm">First picture will be main picture ( click at another picture to change)</p>
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
                        <div className="gap-2 my-4 grid grid-cols-2 md:grid-cols-4 ">
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
                                 <div>
                                    <h3>Price per night</h3>
                                    <input type="number" placeholder="10"  value={price}
                            onChange={(e)=>setPrice(e.target.value)}/>
                                </div>
                        </div>

                        <button className="primary">{id ? 'Update place' : 'Add place'}</button>
                    </form>
               </div>
    )

}

export default AddNewPlaceForm;