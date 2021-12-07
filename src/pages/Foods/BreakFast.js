import React from 'react';
import breakfast1 from '../../images/Breakfast/breakfast1.png';
import breakfast2 from '../../images/Breakfast/breakfast2.png';
import breakfast3 from '../../images/Breakfast/breakfast3.png';
import breakfast4 from '../../images/Breakfast/breakfast4.png';
import breakfast5 from '../../images/Breakfast/breakfast5.png';
import breakfast6 from '../../images/Breakfast/breakfast6.png';

const BreakFast = () => {
    return (
        <div className="bg-white mx-40 grid grid-cols-3 gap-8 ">
            <div className="hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72 ">
                <img className="w-52 pb-6" src={breakfast1} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl animate-pulse">$ <span>23. <small>99</small> </span></h1>
            </div>

            <div className=" hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72">
                <img className="w-52 pb-6" src={breakfast2} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>

            <div className="hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72 ">
                <img className="w-52 pb-6" src={breakfast3} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>

            <div className=" hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72">
                <img className="w-52 pb-6" src={breakfast4} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>

            <div className="hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72 ">
                <img className="w-52 pb-6" src={breakfast5} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>

            <div className=" hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72">
                <img className="w-52 pb-6" src={breakfast6} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>
        </div>
    );
};

export default BreakFast;