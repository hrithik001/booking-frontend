import { Link } from "react-router-dom";

const Login = () => {

   
    return (
        <div className="mt-4 grow flex items-center justify-center">
            <div className="-mt-64 border border-gray-300 rounded-md p-5 shadow-md">
                <h1 className="text-4xl text-center font-semibold mb-4">Login</h1>
                <form className="max-w-md mx-auto">
                    <input type="email" placeholder="example@gmail.com" />
                    <input type="password" placeholder="Password" />
                    <button className="primary mt-3">Login</button>
                    <div className="text-center py-2 text-gray-500">Do nt have account yet? <Link to="/register" className="underline text-black">Register</Link></div>

                </form>
            </div>
        </div>
    );
}

export default Login;