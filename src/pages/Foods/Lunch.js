import React from 'react';
import lunch1 from '../../images/lunch/lunch1.png';
import lunch2 from '../../images/lunch/lunch2.png';
import lunch3 from '../../images/lunch/lunch3.png';
import lunch4 from '../../images/lunch/lunch4.png';
import lunch5 from '../../images/lunch/lunch5.png';
import lunch6 from '../../images/lunch/lunch6.png';



const Lunch = () => {
    return (
        <div className="bg-white mx-40 grid grid-cols-3 gap-8 ">
            <div className="hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72 ">
                <img className="w-52 pb-6" src={lunch1} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>

            <div className=" hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72">
                <img className="w-52 pb-6" src={lunch2} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>

            <div className="hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72 ">
                <img className="w-52 pb-6" src={lunch3} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>

            <div className=" hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72">
                <img className="w-52 pb-6" src={lunch4} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>

            <div className="hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72 ">
                <img className="w-52 pb-6" src={lunch5} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>

            <div className=" hover:shadow-2xl bg-white  px-4 py-8 rounded-lg gap-y-2 grid  justify-items-center w-72">
                <img className="w-52 pb-6" src={lunch6} alt="" />
                <h3 className="text-black text-opacity-90">Healthy meal Plan</h3>
                <p className="text-black text-opacity-75 text-sm">How we dream about our food</p>
                <h1 className="text-xl">$ <span>23. <small>99</small> </span></h1>
            </div>
        </div>
    );
};

export default Lunch;