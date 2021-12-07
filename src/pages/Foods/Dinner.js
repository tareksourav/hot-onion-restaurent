import React from 'react';
import dinner1 from '../../images/Dinner/dinner1.png';
import dinner2 from '../../images/Dinner/dinner2.png';
import dinner3 from '../../images/Dinner/dinner3.png';
import dinner4 from '../../images/Dinner/dinner4.png';
import dinner5 from '../../images/Dinner/dinner5.png';
import dinner6 from '../../images/Dinner/dinner6.png';

const Dinner = () => {
    return (
        <div className="bg-white mx-40 grid grid-cols-3 gap-8 ">
            <div className="hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72 ">
                <img className="w-52 pb-6" src={dinner1} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>

            <div className=" hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72">
                <img className="w-52 pb-6" src={dinner2} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>

            <div className="hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72 ">
                <img className="w-52 pb-6" src={dinner3} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>

            <div className=" hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72">
                <img className="w-52 pb-6" src={dinner4} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>

            <div className="hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72 ">
                <img className="w-52 pb-6" src={dinner5} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>

            <div className=" hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72">
                <img className="w-52 pb-6" src={dinner6} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>
        </div>
    );
};

export default Dinner;