import React from 'react';
import { Link } from "react-router-dom";
import logo2 from '../../images/logo2.png';
// import cart from '../../images/ICON/'
const Header = () => {
    return (
        <div className="flex justify-between bg-white pl-12 p-4">
            <div className="flex justify-end ">
                <Link to="/">
                    <img className="h-8 w-28" src={logo2} alt="" />
                </Link>

            </div>
            <div className="flex justify-end space-x-8 ">
                <Link to="">
                    <span className="fas fa-shopping-cart py-2 text-red-500 "><i className=""></i></span>
                </Link>

                <Link to="/login">
                    <h1 className="text-base font-semibold text-center text-opacity-75 tracking-wider py-2">Login</h1>
                </Link>

                <Link to="/login">
                    <h1 className="text-base font-semibold text-center text-opacity-75 tracking-wider rounded-full py-2 px-6 text-white  bg-red-500 ">Sign up</h1>
                </Link>

            </div>
        </div>
    );
};

export default Header;