import React from 'react';
import logo1 from '../../images/logo.png'

const Footer = () => {
    let d = new Date();
    let currentYear = d.getFullYear();
    // console.log(currentYear);
    return (
        <div className="bg-black text-white py-16 px-28 ">
            <div className="grid grid-cols-3 pb-8">
                <img className="h-8 w-28 col-span-2" src={logo1} alt="" />
                <div className="grid grid-cols-2 text-xs">
                    <ul>
                        <li>About Online Food</li>
                        <li>Read Our blog</li>
                        <li>Sign up to deliver</li>
                        <li>Add your restaurent</li>
                    </ul>

                    <ul>
                        <li>Get Help</li>
                        <li>Read FAQs</li>
                        <li>View All cities</li>
                        <li>Restaurents near me</li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-4  pt-16">
                <footer className="col-span-3 text-xs"> <small>Copyright &copy;  {currentYear}, Red Onion Corporation</small> </footer>

                <div className="flex text-xs gap-8">
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Pricing</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;