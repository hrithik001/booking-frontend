import { Link } from "react-router-dom";
import { useState } from "react";
import axios from  'axios'

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', password: '' });

    const validateUserData = () => {
        let valid = true;
        let errors = { name: '', email: '', password: '' };

        if (!name.trim()) {
            errors.name = 'Name is required and cannot have leading spaces';
            valid = false;
        }

        if (!email) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid';
            valid = false;
        }

        if (!password) {
            errors.password = 'Password is required';
            valid = false;
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const registerUser = async (e) => {
        e.preventDefault();
        if (validateUserData()) {
            console.log('User validation data Successfull!!')
            console.log(`${name} , ${email}, ${password}`);
            try {
                const response = await axios.post('/users/register', {
                    name:name,
                    email:email,
                    password:password
                });
                console.log(response.data);
            } catch (error) {
                console.error('There was an error registering the user:', error);
            }
            
        }else{
             console.log('User validation data Failed!!')
        }
    };

    return (
        <div className="mt-4 grow flex items-center justify-center">
            <div className="-mt-64 border border-gray-300 rounded-md p-5 shadow-md w-full max-w-md">
                <h1 className="text-4xl text-center font-semibold mb-4">Register</h1>
                <form className="w-full" onSubmit={registerUser} noValidate>
                    <div className="mb-2">
                        <input
                            type="text"
                            placeholder="Hrithik"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div className="mb-2">
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-2">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <button className="primary mt-3 w-full p-2 bg-red-500 text-white rounded-md">Submit</button>
                    <div className="text-center py-2 text-gray-500">Already have account? <Link to="/login" className="underline text-black">Login</Link></div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
