import React from 'react';
import bannerImg from '../../../images/bannerbackground.png';
const Banner = () => {
    return (
        <div>

            <div className='bg-img  flex flex-wrap content-center justify-center'>
                <div className="grid justify-items-center">
                    <h1 className="text-5xl mb-6">Best Food waiting for your belly</h1>
                    <div className="w-full pl-10">
                        <input type="text" className="rounded-full pl-3 pr-24 w-11/12 py-2 inline-block" placeholder="Search Your Desire Food" />
                        <button className="rounded-full py-2 px-6 bg-red-500 text-white -ml-24 inline-block">Search</button>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Banner;