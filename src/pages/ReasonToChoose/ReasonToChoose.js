import React from 'react';
import adult from '../../images/Image/adult-blur-blurred-background-687824.png';
import chef from '../../images/Image/chef-cook-food-33614.png';
import architecture from '../../images/Image/architecture-building-city-2047397.png';
import icon1 from "../../images/ICON/Group 204.png";

const ReasonToChoose = () => {
    return (
        <div className="px-28 py-2 mb-10">
            <div className="py-4">
                <h2 className="text-3xl pb-6 ">Why you choose us</h2>
                <p className="text-sm">When you take the time to choose, oftentimes, you are rewarded with a great gastronomic experience built around the ambience of the restaurant and the attitude of the staff serving you. When you take the time to choose, oftentimes, you are rewarded with a great gastronomic experience built around the ambience of the restaurant and the attitude of the staff serving you.</p>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <div className="w-96 hover:shadow-2xl px-2 rounded-lg">
                    <img className="" src={adult} alt="adult" />
                    <div className="grid grid-cols-8 py-4">
                        <i className="fas fa-bus bg-red-600 text-2xl text-white rounded-full h-12 w-12 flex items-center justify-center animate-bounce" ></i>
                        <div className="col-span-7 pl-4">
                            <h3 className="text-xl">Fast Delivery</h3>
                            <p className="text-sm py-4  overflow-y-hidden h-20">In choosing a restaurant, one faces many considerations. Word of mouth or reviews is useful. They give you an idea of what the restaurant is like. Especially from people who had been to this place several times. That would be a vote for the restaurant.</p>
                            <i></i>
                        </div>
                    </div>
                </div>
                <div className="w-96 hover:shadow-2xl px-2 rounded-lg">
                    <img className="" src={chef} alt="adult" />
                    <div className="grid grid-cols-8 py-4">
                        <i className="far fa-bell bg-red-600 text-2xl text-white rounded-full h-12 w-12 flex items-center justify-center animate-bounce" ></i>
                        <div className="col-span-7 pl-4">
                            <h3 className="text-xl">Fast Delivery</h3>
                            <p className="text-sm py-4  overflow-y-hidden h-20">In choosing a restaurant, one faces many considerations. Word of mouth or reviews is useful. They give you an idea of what the restaurant is like. Especially from people who had been to this place several times. That would be a vote for the restaurant.</p>
                            <i></i>
                        </div>
                    </div>
                </div >
                <div className="w-96 hover:shadow-2xl px-2 rounded-lg">
                    <img className="" src={architecture} alt="adult" />
                    <div className="grid grid-cols-8 py-4">
                        <i className="fas fa-truck bg-red-600 text-2xl text-white rounded-full h-12 w-12 flex items-center justify-center animate-bounce" ></i>
                        <div className="col-span-7 pl-4">
                            <h3 className="text-xl">Fast Delivery</h3>
                            <p className="text-sm py-4  overflow-y-hidden h-20">In choosing a restaurant, one faces many considerations. Word of mouth or reviews is useful. They give you an idea of what the restaurant is like. Especially from people who had been to this place several times. That would be a vote for the restaurant.</p>
                            <i></i>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ReasonToChoose;