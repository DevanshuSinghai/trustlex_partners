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
    <header className="bg-white text-black border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="flex">
          <Link to="/" className="flex items-center">
            <img 
              src={`${import.meta.env.BASE_URL}logo.jpeg`} 
              alt="tp" 
              className="h-10 w-auto sm:h-12"
            />
            <img 
              src={`${import.meta.env.BASE_URL}name.jpeg`} 
              alt="tp" 
              className="h-6 w-auto ml-1 mt-2 sm:h-8 sm:ml-2"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-medium text-gray-600 hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (you would add state to control this) */}
        <div className="md:hidden">
          <button className="text-black z-50">
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