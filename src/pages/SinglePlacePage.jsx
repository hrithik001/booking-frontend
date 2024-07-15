import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import BookingTab from "../components/BookingTab";


const SinglePlacePage = () => {
    const {id} = useParams();
    const [place,setPlace] = useState(null);
    const [showAllPhotos,setShowAllPhotos] = useState(false);

    useEffect(() => {
        if(!id) return ;
        axios.get(`places/${id}`).then(({data}) => {
            setPlace(data);

        });
    },[id]);

    if(!place)
        return '';
    if(showAllPhotos){
        return (
            <div className="absolute inset-0 bg-white h-full  min-h-screen flex justify-center">
                <div className="p-8 grid gap-4 ">
                    <button className="fixed py-2 px-4 rounded-2xl right-20 top-20 flex gap-2 shadow shadow-sm" onClick={()=> setShowAllPhotos(false)}> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>

                        close photos</button>
                    {
                    place?.photos?.length > 0 && place.photos.map(photo => (
                        <div key={photo} >
                            <img src={`http://localhost:4000/uploads/${photo}`} alt={photo} />
                        </div>
                    ))
                }
                </div>
                
            </div>
        );
    }


    return (
            <>
             <div className="h-screen bg-gray-50 -mx-8 px-8 py-8 overflow-hidden mt-8">
                <h1 className="text-3xl">{place.title}</h1>
                <a target="_blank" className="font-semibold underline gap-2 my-2 flex" href={`https://maps.google.com/?q=${place.address}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                    </svg>
                    {place.address}
                </a>
            <div className="grid gap-2 grid-cols-[3fr_1fr] h-full relative rounded-3xl  overflow-hidden">
                <div className="bg-blue-200 h-full">
                    {place.photos?.[0] && (
                        <div className="w-full h-full">
                            <img className="w-full h-full object-cover object-center" src={`http://localhost:4000/uploads/${place.photos[0]}`} alt={place.photos[0]} />
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-2 h-full relative">
                    {place.photos?.[1] && (
                        <div className="w-full h-1/2">
                            <img className="w-full h-full object-cover object-center" src={`http://localhost:4000/uploads/${place.photos[1]}`} alt={place.photos[1]} />
                        </div>
                    )}
                    {place.photos?.[2] && (
                        <div className="w-full h-1/2 relative ">
                            <img className="w-full h-full object-cover object-center" src={`http://localhost:4000/uploads/${place.photos[2]}`} alt={place.photos[2]} />
                        
                        </div>
                    )}
                    <button onClick={() => setShowAllPhotos(true)} className="absolute  flex  gap-2 text-black bg-white right-6 top-4 px-4 py-3 rounded-full opacity-75 font-bold shadow shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                        </svg>
                        see more
                    </button>
                </div>
            
            
            </div>
            
        </div>
    <div className=" bg-gray-50 -mx-8 px-8 py-8 overflow-hidden">
           
          
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] mt-4 font-medium">
                 
                <div className="p-4">
                    <h2 className="font-semibold text-2xl text-gray-700  ">Description</h2>
                    <p className="text-sm text-gray-500">description of the place</p>
                      <div className="border p-5 my-3 rounded-2xl">
                            <p className="font-semibold">{place.description}</p>
                       </div>
                    Check-in: {place.checkIn} <br />
                    Check-out: {place.checkOut} <br />
                    Max number of guests: {place.maxGuests}

                </div>
                <div className="bg-white shadow p-4 rounded-2xl  ">
                   <BookingTab price={place.price}/>
                </div>
            </div>
            <div className="bg-white border py-3 px-4 rounded-2xl mt-3">
                   <h2 className="font-semibold text-2xl text-gray-700 my-3 ">Extra info</h2>
                   <p className="text-md text-gray-500 leading-6">{place.extraInfo}</p>  
            </div>

              
    </div>
    
    
            </>

    );
}

export default SinglePlacePage;