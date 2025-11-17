// src/components/PracticeAreas.jsx

import { Link } from 'react-router-dom'; // Link ko import karein
import { practiceAreas } from '../data/practiceAreasData'; // Aapki data file se import karein

// Homepage par dikhane ke liye sirf pehle 6 practice areas ko chunein
const featuredAreas = practiceAreas.slice(0, 6);

const PracticeAreas = () => {
  return (
    // Simple white section with black text
    <section className="py-20 text-black bg-white">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
          Our PracticeAreas
        </h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Yahaan hum featuredAreas (pehle 6) par map kar rahe hain */}
          {featuredAreas.map((area) => (
            <div
              key={area.name} // Key ko area.name se set karein
              className="p-8 transition-all duration-300 border border-gray-200 rounded-lg hover:border-black hover:shadow-2xl hover:bg-gray-50 hover:scale-105"
            >
              <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                {area.name} {/* Title ko area.name se set karein */}
              </h3>
              <p className="mb-6 text-gray-600">
                {/* Homepage ke liye ek short, dynamic description */}
                Strategic advice and representation for {area.name.toLowerCase()} matters.
              </p>
              {/* Link ko /expertise page par point karein */}
              <Link to="/expertise" className="p-8 text-black transition-all duration-300font-semibold hover:text-gray-700 hover:shadow-2xl hover : sclale-105 ">
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;