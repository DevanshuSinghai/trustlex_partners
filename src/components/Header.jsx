// src/components/Header.js

import { Link } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our People', path: '/people' },
    { name: 'Practice Areas', path: '/expertise' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    // Simple white header with a bottom border
    <header className="sticky top-0 z-50 text-black bg-white border-b border-gray-200">
      <nav className="container flex items-center justify-between px-6 py-5 mx-auto">

        {/* Logo */}
        <div className="flex">
          <Link to="/" className="flex items-center">
            <img 
              src={`${import.meta.env.BASE_URL}logo.jpeg`} 
              alt="tp" 
              className="w-auto h-10 sm:h-12"
            />
            <img 
              src={`${import.meta.env.BASE_URL}name.jpg`} 
              alt="tp" 
              className="w-auto h-6 mt-2 ml-1 sm:h-8 sm:ml-2"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-medium text-gray-600 transition-colors hover:text-black"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (you would add state to control this) */}
        <div className="md:hidden">
          <button className="z-50 text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;