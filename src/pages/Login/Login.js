import React from 'react';
import logo2 from '../../images/logo2.png'
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import { Link, useNavigate } from "react-router-dom";
// import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    // git
    const { user, SignInWithGoogle } = useAuth();
    let navigate = useNavigate();
    // function handleClick() {
    //     navigate("/home");
    //   }

    return (
        <>
            <div className="login-bg-img ">

                <div className=" grid justify-items-center pb-8">
                    <img className="w-64 my-12 	" src={logo2} alt="" />
                    <form className="bg-transparent shadow-md rounded  px-8 pt-6 pb-8 mb-4 ">
                        <div className="mb-4 ">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                                Name
                            </label>
                            <input className="shadow bg-gray-50  rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                        </div>
                        <div className="mb-4 ">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Email
                            </label>
                            <input className="shadow bg-gray-50  rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>

                            <input className="shadow bg-gray-50 appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            <p class="text-red-500 text-xs italic">Please write a password.</p>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="re-type-password">
                                Re-type Password
                            </label>

                            <input className="shadow bg-gray-50 appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="re-type-password" type="password" placeholder="******************" />
                            <p class="text-red-500 text-xs italic">Please Re-type password.</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <Link to="/" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                Sign In
                            </Link>
                            <Link to="" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                <button onClick={SignInWithGoogle}><i class="fab fa-google"> </i>
                                    oogle sign in</button>
                            </Link>

                        </div>
                        <Link to="/" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-green-900 my-6" >
                            Forgot Password?
                        </Link>
                    </form>


                </div>
            </div>

        </>

    );
};

export default Login;