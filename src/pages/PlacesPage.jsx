
import { Link  } from "react-router-dom";
import AccountNav from "../components/AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import { CLOUDINARY_URL } from "../secret";
axios.defaults.withCredentials = true;

const PlacesPage = () => {

    const [places,setPlaces] = useState([]);
    useEffect( () => {
        axios.get('/users/places').then(({data}) => {
          setPlaces(data);
        })
    },[])  

    return (
      <div>
        <AccountNav/>
         <div className="text-center mt-10">

            <Link to={'new'} className="inline-flex bg-primary text-white py-3 px-6 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </svg>
                Add Places
            </Link>
            <br />
            <div className="mt-4">
              {
                places.length > 0 && places.map((place,index) => (
                  <Link to={'/account/places/'+ place._id} className="flex bg-gray-100 p-4 rounded-2xl gap-4 cursor-pointer my-4" key={place._id}>
                    <div className="w-32 h-32 flex  bg-gray-300 grow-0 shrink-0">
                        {
                          place.photos?.length > 0 && (
                         
                            <img className="object-cover" src={`${CLOUDINARY_URL}/${place.photos[0]}`} alt={place.photos[0]} />
                          )
                        }
                    </div>
                    <div className="grow-0 shrink">
                        <h2 className="text-xl ">
                          {place.title}
                        </h2>
                          
                        <p className="text-sm mt-2">{place.description   }</p>
                    </div>
                  </Link>
                ))
              }
            </div>
         </div>

      </div>
    );
}
export default PlacesPage;