import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa6";
const Home = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="h-screen relative">
            <img
                src='./Images/Main Img.avif'
                alt='main img'
                className="w-full h-full object-cover opacity-80"
                style={{ zIndex: -1 }}
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-4xl text-black font-bold mb-4">Your Text Here</h1>

                <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                    <div className="relative inline-block text-left">
                        <input type="text" className="hover:border-black hover:border-2 px-4 py-2 mb-2 sm:mb-0 w-full sm:w-auto rounded mr-5" placeholder="Input 1" />
                        <button onClick={toggleDropdown} className="absolute right-0 top-0 mt-2">
                            <FaChevronDown className="h-5 w-5 " />
                        </button>
                        <input type="text" className="hover:border-black hover:border-2 px-4 py-2 mb-2 sm:mb-0 w-full sm:w-auto rounded " placeholder="Input 2" />
                                                                           
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 1</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 2</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 3</a>
                                </div>
                            </div>
                        )}
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 hover:border-black hover:border-2 text-white px-4 py-2 w-full sm:w-auto rounded">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
