import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import {Navigate,useParams} from 'react-router-dom'
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../components/AccountNav";

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
            subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user?.name} ({user?.email}) <br />
                    <button onClick={logOut} className="primary max-w-sm mt-2">Log Out</button>
                </div>
            )
        }
        {
            subpage === 'places' && <PlacesPage/>
        }
        </>
    )
}

export default ProfilePage;