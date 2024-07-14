import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import {Link,Navigate,useParams} from 'react-router-dom'
import axios from "axios";

const AccountPage = () => {

    const {user,load,setUser} = useContext(UserContext);
    const [redirect,setRedirect] = useState(null);
    
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

    if(load && !user)
    {
        return <Navigate to={'/login'}/>
    }

    const linkClasses = (type=null) => {
        let classess = "py-3 px-6";

        if(type === subpage )
        {
            classess += ' bg-primary text-white rounded-full'
        }
        return classess;
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
        <nav className="w-full flex justify-center mt-8 gap-4">
            <Link className={linkClasses('profile')} to={'/account/profile'}>My Profile</Link>
            <Link className={linkClasses('bookings')} to={'/account/bookings'}>My Bookings</Link>
            <Link className={linkClasses('places')} to={'/account/places'}>My Accomodations</Link>
         
        </nav>
        {
            subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} (user.email) <br />
                    <button onClick={logOut} className="primary max-w-sm mt-2">Log Out</button>
                </div>
            )
        }
        </>
    )
}

export default AccountPage;