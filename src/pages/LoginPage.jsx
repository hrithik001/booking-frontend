import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import IndexPage from "./IndexPage";
import { UserContext } from "../context/UserContext";


const Login = () => {
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    // const [errors, setErrors] = useState({});
    const {setUser} = useContext(UserContext);
    // const validateData = () => {
    //     const newErrors = {};
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //     if (!email) {
    //         newErrors.email = "Email is required";
    //     } else if (!emailRegex.test(email)) {
    //         newErrors.email = "Invalid email format";
    //     }

    //     if (!password) {
    //         newErrors.password = "Password is required";
    //     } else if (password.length < 6) {
    //         newErrors.password = "Password must be at least 6 characters long";
    //     }

    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };
    const userLogin = async (e) => {
        e.preventDefault();  
      
        // if (!validateData()) return ;
       try{
              console.log(`${email}- ${password}`);
              const {data} = await axios.post('/users/login',{
                                email: email,
                                password: password 
                                 })
           
            setUser(data);
            console.log("logged in");
            setRedirect(true);
          
       }catch(e)
       {
        if (e.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (e.response.status === 404) {
                console.log("User not found");
                alert("User not found");
            } else if (e.response.status === 401) {
                console.log("Invalid password");
                alert("Invalid password");
            } else {
                console.log("Login failed due to server error");
                alert("Login failed due to server error");
            }
        } else if (e.request) {
            // The request was made but no response was received
            console.log("No response received");
            alert("No response received");
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", e.message);
            alert("Login failed");
        }
       }

    }

    if(redirect)
    {
        return <Navigate to={'/'} />
    }
   
    return (
        <div className="mt-4 grow flex items-center justify-center">
            <div className="-mt-64 border border-gray-300 rounded-md p-5 shadow-md">
                <h1 className="text-4xl text-center font-semibold mb-4">Login</h1>
                <form className="max-w-md mx-auto" onSubmit={userLogin} noValidate>
                    <input
                     type="email"
                      placeholder="example@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                       />
                        
                    <input
                     type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                       />
                        
                    <button className="primary mt-3">Login</button>
                    <div className="text-center py-2 text-gray-500">Do nt have account yet? <Link to="/register" className="underline text-black">Register</Link></div>

                </form>
            </div>
        </div>
    );
}

export default Login;