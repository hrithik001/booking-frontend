import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import {Navigate,useParams,Link} from 'react-router-dom'
import axios from "axios";
import AccountNav from "../components/AccountNav";
axios.defaults.withCredentials = true;

const ProfilePage = () => {
     const [redirect,setRedirect] = useState(null);
    const {user,load,setUser} = useContext(UserContext);
   
    console.log(user);
    let {subpage} = useParams()
    if(subpage === undefined)
    {
        subpage = "profile"
    }
      
       console.log(subpage);

    if(load)
    {
        return 'Loading......!!'
    }

    if(load && !user && !redirect)   
    {
        return <Navigate to={'/login'}/>
    }

 

    const logOut = async () => {
        const res = await axios.post('users/logout')
        console.log(res);
        setRedirect('/');
        setUser(null);

    }

    if(redirect)
    {
        return <Navigate to={redirect} />
    }
   

    return (
        <>
        <AccountNav/>
        {
             <div className="mt-4 grow flex items-center justify-center ">
            <div className=" border border-gray-300 rounded-md w-1/4  shadow-md py-16 px-16">
                <h1 className="text-4xl text-center font-semibold mb-4">Your Account</h1>
                <div className="max-w-md mx-auto" >
                   <div className="text-2xl">  {user?.name}</div>
                
                   <div className="text-xl">{user?.email}</div>
                        
                    <button className="primary mt-3" onClick={logOut}>Logout</button>
                   
                </div>
            </div>
        </div>
            
        }
       
        </>
    )
}

export default ProfilePage;