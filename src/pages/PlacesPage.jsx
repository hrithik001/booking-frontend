import { useState,useEffect } from "react";
import { Link ,useParams } from "react-router-dom";
import Perks from "../components/Perks";
import axios from 'axios'
const PlacesPage = () => {

    const {action} = useParams();
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [address,setAddress] = useState('');
    const [addedphotos ,setAddedPhotos] = useState([]);
    const [photolink,setPhotolink] = useState('');
    const [perks,setPerks] = useState([]);
    const [extraInfo,setExtraInfo] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [maxGuests,setMaxGuests] = useState(1);


    const addByLink = async (e) => {
        e.preventDefault();
        console.log("adding ....",photolink);
       try{
            const {data} = await axios.post('place/upload/by-link',{
                link: photolink
            })
            console.log(data.name)
            setAddedPhotos( prev => {
                return [...prev, data.name ];
            });
            setPhotolink('')
            console.log("picture uploaded successfully!!");
       }
       catch(error)
       {
        console.log("Picture upload failed",error);
       }


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
                    <form >
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
                        <div className="flex gap-2">
                            <input type="text" placeholder="Add using link .jpg" value={photolink} onChange={e => setPhotolink(e.target.value)}/>
                            <button onClick={addByLink} className="bg-gray-300 px-6 rounded-full  ">+&nbsp;Add&nbsp;photo</button>
                        </div>
                        <div className="mt-2 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2">
                            
                            {
                                
                                addedphotos.length > 0 && addedphotos.map((link,index) => {
                                    return (  
                                        <div key={index} className="">
                                            {
                                                console.log(link)
                                            }
                                            <img className="rounded-2xl " src={`http://localhost:4000/uploads/${link}`} alt={link} />
                                        </div>
                                    )
                                })
                            }
                            <label className="border flex justify-center bg-transparent rounded-2xl py-8 font-bold cursor-pointer">
                                <input type="file" className="hidden"/>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                </svg>

                            </label>
                           
                        </div>
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