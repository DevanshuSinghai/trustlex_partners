// src/components/Hero.jsx

import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="bg-[#AAC4F5] bg-cover bg-center">
      <div className="container px-8 py-24 mx-auto md:px-16 md:py-32">
        {/* Flex Container: Stacks vertically on mobile, row on desktop */}
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          
          {/* Left Side: Text Content */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#1a2340]">
              Expert Counsel.
              <br />
              Modern Solutions.
            </h1>
            <p className="text-xl md:text-2xl text-[#1a2340] mb-8">
              TrustLex Partners is a full-service law firm dedicated to
              providing strategic advice to navigate your most complex legal challenges.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#1a2340] text-[#fcfcfb] font-semibold py-3 px-8 rounded-md
                         hover:bg-opacity-90 transition-colors shadow-lg"
            >
              Get in Touch
            </Link>
          </div>

        {/* Right Side: Image */}
          {/* Added 'md:-mt-12' to shift the image up by 3rem (48px) on desktop */}
          <div className="flex justify-center w-full md:w-1/2 md:justify-end md:-mt-12">
            <img 
              src={`${import.meta.env.BASE_URL}profile.jpg`}  
              alt="Profile" 
              className="object-cover w-full max-w-xs shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;