// src/components/AboutBlurb.js

import { Link } from 'react-router-dom';

const AboutBlurb = () => {
  return (
    // We alternate the background color to create separation
    // Hero was black, PracticeAreas was white, so this is light gray.
    // We'll use 'bg-gray-50' for a very subtle, clean off-white look.
    <section className="py-20 text-black bg-gray-50">
      <div className="container max-w-4xl px-6 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
          A Firm Built on Trust and Expertise
        </h2>
        
        <div className="space-y-6 text-lg text-left text-gray-700 md:text-center">
          <p>
          At AdvTejasvigoel , we believe good legal advice should be clear, practical, and built on trust. Our goal is simple: to help you solve your legal issues with confidence and peace of mind.We know that dealing with legal matters can feel overwhelming. That’s why we take the time to listen, understand your situation, and guide you step by step... At AdvTejasvigoel, we’re not just your lawyers—we’re your partners in navigating the law with clarity and care
          </p>
          <p>
            Recognized for our legal prowess and extensive expertise, AdvTejasvigoel 
            excels in providing customized solutions to complex legal challenges, 
            building trust and delivering result-oriented outcomes for clients 
            across diverse sectors.
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="p-8 px-8 py-3 font-semibold text-black transition-all duration-300 border border-black hover:shadow-2xl hover:scale-105 hover:bg-black hover:text-white "
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};
 
export default AboutBlurb;