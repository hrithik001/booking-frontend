import { useState } from "react";
import axios from 'axios'

const PhotoUploader = ({addedphotos,onChange}) => {

    const [photolink,setPhotolink] = useState('');
   
     const addByLink = async (e) => {
        e.preventDefault();
        console.log("adding ....",photolink);
       try{
            const {data} = await axios.post('places/upload/by-link',{
                link: photolink
            })
            console.log(data.name)
            onChange( prev => {
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

    const uploadPictureFile = async (e) => {
        
        const files = e.target.files;
       
        const data = new FormData();
        for(let i = 0 ;i < files.length ; i++)
        {
            data.append('photos',files[i]);
           
        }
        

        console.log("all data",data)
        console.log("data set ",data);
        axios.post('upload/by-file',data , {
            headers: { 'Content-Type':'multipart/form-data' }
        }).then(response => {
            const {data:fileName} = response;
            console.log("recived name",fileName);
            onChange(prev => {
                return [...prev, ...fileName];
            })
        })
        

    }

  


    return (
        <>
            <div className="flex gap-2">
                            <input type="text" placeholder="Add using link .jpg" value={photolink} onChange={e => setPhotolink(e.target.value)}/>
                            <button onClick={addByLink} className="bg-gray-300 px-6 rounded-full  ">+&nbsp;Add&nbsp;photo</button>
                        </div>
                        <div className="mt-2 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2">
                            
                            {
                                
                                addedphotos.length > 0 && addedphotos.map((link,index) => {
                                    return (  
                                        <div key={link} className="h-32 flex">
                                            {
                                                console.log(link)
                                            }
                                            <img className="rounded-2xl w-full object-cover " src={`http://localhost:4000/uploads/${link}`} alt={link} />
                                        </div>
                                    )
                                })
                            }
                            <label className="border flex justify-center bg-transparent rounded-2xl py-8 font-bold cursor-pointer" onChange={uploadPictureFile}>
                                <input type="file" className="hidden"/>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                </svg>

                            </label>
                           
                        </div>
        </>
    )

}

export default PhotoUploader;