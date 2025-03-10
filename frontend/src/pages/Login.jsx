import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import log3 from '../assets/log3.png';
import log2 from '../assets/log2.png';

function Login() {
    const [currentState, setCurrentState] = useState('Login');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
    };

    return (
        <div className="flex justify-center gap-x-20 items-center mt-6">
            {/* Illustration gauche */}
            <img src={log2} alt="Illustration Left" className="w-[20%] max-w-[200px] relative top-20"/>

            {/* Formulaire au centre */}
            <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-[400px] bg-white gap-4 text-gray-800 
                border-2 border-gray-800 rounded-2xl shadow-lg p-6 transition duration-300 
                hover:shadow-2xl hover:border-yellow-500">
                
                <div className="inline-flex items-center gap-2 mb-2 mt-4">
                    <p className="prata-regular text-3xl">{currentState}</p>
                    <hr className="border-none h-[1.5px] w-8 bg-gray-800"/>
                </div>

                {currentState === 'Login' ? '' : 
                    <div className="w-full flex items-center border border-gray-800 px-3 py-2 rounded-md">
                        <User className="text-gray-600" size={18} />
                        <input type="text" className="w-full ml-2 outline-none" placeholder="Name" required/>
                    </div>
                }

                <div className="w-full flex items-center border border-gray-800 px-3 py-2 rounded-md">
                    <Mail className="text-gray-600" size={18} />
                    <input type="email" className="w-full ml-2 outline-none" placeholder="Email" required/>
                </div>

                <div className="w-full flex items-center border border-gray-800 px-3 py-2 rounded-md">
                    <Lock className="text-gray-600" size={18} />
                    <input type="password" className="w-full ml-2 outline-none" placeholder="Password" required/>
                </div>

                <div className="w-full flex justify-between text-sm">
                    <p className="cursor-pointer">Forgot your password?</p>
                    {
                        currentState === 'Login'
                        ? <p onClick={()=>setCurrentState('Sign Up')} className="cursor-pointer">Create Account</p>
                        : <p onClick={()=>setCurrentState('Login')} className="cursor-pointer">Login Here</p>
                    }
                </div>

                <button className="bg-black text-white font-light px-8 py-2 mt-4 flex items-center gap-2 
                    hover:bg-gray-900 transition rounded-md">
                    {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
                </button>
            </form>

            {/* Illustration droite */}
            <img src={log3} alt="Illustration Right" className="w-[20%] max-w-[200px] relative -top-20"/>
        </div>
    );
}

export default Login;



