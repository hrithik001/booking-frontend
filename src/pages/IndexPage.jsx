import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const IndexPage = () => {

    const [places,setPlaces] = useState([]);

    useEffect(() => {

        axios.get('/places').then(({data}) => {
            console.log(data);
            setPlaces([...data,...data])
        });


    },[]);


    return (
        // <>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-8 gap-y-8 gap-x-6 rounded-2xl">
                {
                    places.length > 0 && (places.map((place,index) => (
                            <Link to={`/places/${place._id}`}  key={index}>
                                <div className="bg-gray-500 rounded-2xl flex">
                                   {place.photos?.[0] && 
                                    <img className="object-cover rounded-2xl aspect-square" src={`http://localhost:4000/uploads/${place.photos[0]}`} alt={place.photos[0]} />
                                    }
                                </div>
                                <h2 className="truncate font-bold"> {place.title}</h2>
                                <h3 className="truncate">{place.address}</h3>
                                <div className="font-bold mt-1">
                                  &#8377;{  place.price} per night
                                </div>
                            </Link>
                    )))
                 }
                 
            </div>
        
            
    );
}

export default IndexPage;


 {/* <div className="mt-4">
              {
                places.length > 0 && places.map((place,index) => (
                  <div className="flex bg-gray-100 p-4 rounded-2xl gap-4 cursor-pointer my-4" key={place._id}>
                    <div className="w-32 h-32 flex  bg-gray-300 grow-0 shrink-0">
                        {
                          place.photos?.length > 0 && (
                         
                            <img className="object-cover" src={`http://localhost:4000/uploads/${place.photos[0]}`} alt={place.photos[0]} />
                          )
                        }
                    </div>
                    <div className="grow-0 shrink">
                        <h2 className="text-xl ">
                          {place.title}
                        </h2>
                          
                        <p className="text-sm mt-2">{place.description   }{ console.log(place.photos?.length)}</p>
                    </div>
                  </div>
                ))
              }
            </div> */}
        // </>