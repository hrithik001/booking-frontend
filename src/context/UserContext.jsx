
import axios from "axios";
import {createContext, useEffect, useState } from "react";


export const UserContext = createContext({});
export const UserContextProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [load,setLoad] = useState(true);
    useEffect(() => {
        axios.get('/users/profile')
        .then(({data}) => {
            setUser(data)
            setLoad(true);
        })       
        
  }, [])
    
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    );
}


