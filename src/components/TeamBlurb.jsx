// src/components/TeamBlurb.jsx

import { Link } from 'react-router-dom';
// teamData.js se humne partners ki list import ki
import { team } from '../data/teamData'; 

const TeamBlurb = () => {
  // Sabhi 5 partners ko homepage pe dikhayein
  const featuredTeam = team;

  return (
    <section className="py-20 text-black bg-gray-50">
      <div className="container px-6 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
          Meet Our Partners
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg text-center text-gray-700">
          At AdvTejasvigoel, we are proud of the diverse expertise and dedication our team brings to the table. Our partners are committed to delivering practical, reliable, and result-driven legal solutions.
        </p>

        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto mb-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Pehle 3 partners ko feature karein */}
          {featuredTeam.slice(0, 3).map((partner) => (
            <div
              key={partner.name}
              className="p-6 text-center transition-all duration-300 ease-in-out bg-white border border-gray-200 hover:shadow-xl hover:border-black hover:-translate-y-1"
            >
              <h4 className="mb-1 text-xl font-semibold text-black">{partner.name}</h4>
              <p className="text-gray-600">{partner.title}</p>
            </div>
          ))}
          {/* Baaki 2 partners ke liye alag row */}
        </div>
        <div className="grid max-w-3xl grid-cols-1 gap-8 mx-auto mb-12 md:grid-cols-2">
          {featuredTeam.slice(3).map((partner) => (
            <div
              key={partner.name}
              className="p-6 text-center transition-all duration-300 ease-in-out bg-white border border-gray-200 hover:shadow-xl hover:border-black hover:-translate-y-1"
            >
              <h4 className="mb-1 text-xl font-semibold text-black">{partner.name}</h4>
              <p className="text-gray-600">{partner.title}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            to="/people"
            className="px-8 py-3 font-semibold text-black transition-all duration-300 border border-black hover:bg-black hover:text-white hover:shadow-2xl hover:scale-105 "
          >
            Learn More About Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamBlurb;