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

    const removePhoto = (e,filename) => {
        e.preventDefault();
        onChange([...addedphotos.filter(photo => photo !== filename)])
    }

    const makeMainPicture = (e,filename) => {
        e.preventDefault();
        onChange([filename,...addedphotos.filter(photo => photo !== filename)])
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
                                        <div key={link} className="h-32 flex relative"  onClick={(e) => makeMainPicture(e,link)}>
                                            
                                            <img className="rounded-2xl w-full object-cover " src={`http://localhost:4000/uploads/${link}`} alt={link} />
                                            <button  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1" onClick={(e) => {e.stopPropagation(); removePhoto(e,link)}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                                </svg>

                                            </button>
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