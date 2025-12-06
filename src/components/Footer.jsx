// src/components/Footer.jsx

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // AAC4F5 footer with navy text and gold accent divider
    <footer className="bg-[#aac4f5] text-[#1a2340]">
      <div className="container grid grid-cols-1 gap-8 px-6 py-16 mx-auto md:grid-cols-4">
        
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-2xl font-bold text-[#1a2340] mb-4">AdvTejasvigoel</h3>
          <p>Navigating the law with clarity and care.</p>
          <a 
            href="mailto:advtejasvigoel@gmail.com" 
            className="block mt-4 hover:text-[#d4af37] break-words"
          >
            advtejasvigoel@gmail.com
          </a>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#1a2340] mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-[#d4af37]">About Us</Link></li>
            <li><Link to="/people" className="hover:text-[#d4af37]">Our People</Link></li>
            <li><Link to="/expertise" className="hover:text-[#d4af37]">Practice Areas</Link></li>
            <li><Link to="/contact" className="hover:text-[#d4af37]">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Locations */}
        <div>
          <h4 className="text-lg font-semibold text-[#1a2340] mb-4">Locations</h4>
          <ul className="space-y-2">
            <li>Delhi</li>
            <li>Uttarakhand</li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div>
          <h4 className="text-lg font-semibold text-[#1a2340] mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="/privacy" className="hover:text-[#d4af37]">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-[#d4af37]">Terms & Conditions</Link></li>
          </ul>
        </div>

      </div>
      <div className="border-t border-[#d4af37]">
        <div className="container mx-auto px-6 py-6 text-center text-[#1a2340]">
          <p>&copy; {new Date().getFullYear()} AdvTejasvigoel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;