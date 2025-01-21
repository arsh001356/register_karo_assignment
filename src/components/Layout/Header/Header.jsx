import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full bg-[#1C4670] py-2 sm:h-11">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-end items-center gap-2 sm:gap-4 text-white text-sm">
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="mailto:info@registerkaro.in" className="flex items-center gap-1 hover:text-gray-200">
              <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">www.registerkaro.in</span>
            </a>
            
            <div className="hidden sm:block w-px h-5 bg-gradient-to-b from-transparent via-gray-400 to-transparent" />
            
            <a href="tel:+918447746183" className="flex items-center gap-1 hover:text-gray-200">
              <FaPhone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">+918447746183</span>
            </a>
          </div>

          <div className="hidden sm:block w-px h-5 bg-gradient-to-b from-transparent via-gray-400 to-transparent" />

          <div className="flex items-center gap-3">
            <FaInstagram className="w-4 h-4 cursor-pointer hover:text-gray-200" />
            <FaFacebook className="w-4 h-4 cursor-pointer hover:text-gray-200" />
            <FaTwitter className="w-4 h-4 cursor-pointer hover:text-gray-200" />
            <FaPinterest className="w-4 h-4 cursor-pointer hover:text-gray-200" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
