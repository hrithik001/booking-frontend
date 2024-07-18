import { useState } from "react";
import { CLOUDINARY_URL } from '../secret.js'

const PlaceGallery = ({place}) => {

     const [showAllPhotos,setShowAllPhotos] = useState(false);

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
                            <img src={`${CLOUDINARY_URL}/${photo}`} alt={photo} />
                        </div>
                    ))
                }
                </div>
                
            </div>
        );
    }

    return (
               <div className="grid gap-2 grid-cols-[3fr_1fr] h-full relative rounded-3xl  overflow-hidden">
                <div className="bg-blue-200 h-full">
                    {place.photos?.[0] && (
                        <div className="w-full h-full">
                            <img className="w-full h-full object-cover object-center" src={`${CLOUDINARY_URL}/${place.photos[0]}`} alt={place.photos[0]} />
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-2 h-full relative">
                    {place.photos?.[1] && (
                        <div className="w-full h-1/2">
                            <img className="w-full h-full object-cover object-center" src={`${CLOUDINARY_URL}/${place.photos[1]}`} alt={place.photos[1]} />
                        </div>
                    )}
                    {place.photos?.[2] && (
                        <div className="w-full h-1/2 relative ">
                            <img className="w-full h-full object-cover object-center" src={`${CLOUDINARY_URL}/${place.photos[2]}`} alt={place.photos[2]} />
                        
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
    );
}

export default PlaceGallery;