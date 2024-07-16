import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import BookingTab from "../components/BookingTab";
import PlaceGallery from "../components/PlaceGallery";


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
                <PlaceGallery place={place} />
            
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
                   <BookingTab place={place}/>
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