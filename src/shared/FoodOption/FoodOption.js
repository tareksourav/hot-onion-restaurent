import React from 'react';
import { Link } from "react-router-dom";

const FoodOption = () => {
    return (
        <div className=" flex justify-center bg-white gap-24 p-6">
            <Link to="/breakfast" className="p-4 font-bold font-sans border-b-4  
    border-transparent hover:border-current cursor-pointer select-none">Break Fast</Link>
            <Link to="/lunch" className="p-4 font-bold font-sans border-b-4  
    border-transparent hover:border-current cursor-pointer select-none">Lunch</Link>
            <Link to="/dinner" className="p-4 font-bold font-sans border-b-4  
    border-transparent hover:border-current cursor-pointer select-none">Dinner</Link>
        </div>
    );
};

export default FoodOption;