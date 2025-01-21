import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to close the menu when a link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close the mobile menu
    };

    return (
        <header className="w-full bg-[#FFFFFF] shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src="src/assets/images/logo.png" alt="Logo" className="h-6" />
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="md:hidden" 
                        aria-expanded={isMenuOpen ? 'true' : 'false'}
                    >
                        <FaBars className="text-gray-700 text-xl" />
                    </button>

                    {/* Navigation Links and Search (Desktop) */}
                    <nav className="hidden md:flex items-center space-x-7 text-sm font-medium mr-[-500px] text-gray-700">
                        <Link to="heroSection" smooth={true} duration={500} className="hover:text-gray-900">
                            Home
                        </Link>
                        <Link to="features" smooth={true} duration={500} className="flex items-center gap-1 hover:text-gray-900">
                            Our Services <FaChevronDown className="text-xs" />
                        </Link>
                        <Link to="blogSection" smooth={true} duration={500} className="hover:text-gray-900">
                            Blog
                        </Link>
                        <Link to="aboutSection" smooth={true} duration={500} className="hover:text-gray-900">
                            About Us
                        </Link>
                        <Link to="contactUs" smooth={true} duration={500} className="hover:text-gray-900">
                            Contact Us
                        </Link>
                        <FaSearch className="text-gray-700 text-lg cursor-pointer" />
                    </nav>

                    {/* Talk to Expert Button (Desktop) */}
                    <button className="hidden md:block bg-[#FFA229] text-white px-4 py-2 rounded-tr rounded-bl shadow-md hover:opacity-90">
                        Talk to Expert
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="mt-4 md:hidden">
                        <Link 
                            to="heroSection" 
                            smooth={true} 
                            duration={500} 
                            className="block py-2 text-gray-700 hover:text-gray-900" 
                            onClick={handleLinkClick}
                        >
                            Home
                        </Link>
                        <Link 
                            to="features" 
                            smooth={true} 
                            duration={500} 
                            className="block py-2 text-gray-700 hover:text-gray-900" 
                            onClick={handleLinkClick}
                        >
                            Our Services
                        </Link>
                        <Link 
                            to="blogSection" 
                            smooth={true} 
                            duration={500} 
                            className="block py-2 text-gray-700 hover:text-gray-900" 
                            onClick={handleLinkClick}
                        >
                            Blog
                        </Link>
                        <Link 
                            to="aboutSection" 
                            smooth={true} 
                            duration={500} 
                            className="block py-2 text-gray-700 hover:text-gray-900" 
                            onClick={handleLinkClick}
                        >
                            About Us
                        </Link>
                        <Link 
                            to="contactUs" 
                            smooth={true} 
                            duration={500} 
                            className="block py-2 text-gray-700 hover:text-gray-900" 
                            onClick={handleLinkClick}
                        >
                            Contact Us
                        </Link>
                        <div className="flex items-center justify-between mt-4">
                            <FaSearch className="text-gray-700 text-lg cursor-pointer" />
                            <button className="bg-[#FFA229] text-white px-4 py-2 rounded-tr rounded-bl shadow-md hover:opacity-90">
                                Talk to Expert
                            </button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;
