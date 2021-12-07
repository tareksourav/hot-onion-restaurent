import React from 'react';
import CheckOutFood from '../../../shared/CheckOutFood/CheckOutFood';
import FoodOption from '../../../shared/FoodOption/FoodOption';
import Header from '../../../shared/Header/Header';
import BreakFast from '../../Foods/BreakFast';
import Dinner from '../../Foods/Dinner';
import Lunch from '../../Foods/Lunch';
import ReasonToChoose from '../../ReasonToChoose/ReasonToChoose';
import Banner from '../Banner/Banner';
import Footer from '../../../shared/Footer/Footer';
import Login from '../../Login/Login';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div className="font-sans">

            <Header></Header>
            <Banner></Banner>
            <FoodOption></FoodOption>
            <Outlet />
            {/* <BreakFast></BreakFast>
            <Lunch></Lunch>
            <Dinner></Dinner> */}
            <CheckOutFood></CheckOutFood>
            <ReasonToChoose></ReasonToChoose>
            <Footer></Footer>

        </div>
    );
};

export default Home;