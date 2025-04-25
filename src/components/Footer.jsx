import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-sm text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Climate Co</h3>
          <p className="mb-1">Reliable Heating & Cooling Solutions</p>
          <p className="mb-1">📍 Ocean Grove, VIC</p>
          <p className="mb-1">📞 <a href="tel:0430831199" className="hover:underline">0430 831 199</a></p>
          <p>✉️ <a href="mailto:workorders@theclimateco.com.au" className="hover:underline">workorders@theclimateco.com.au</a></p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/contact" className="hover:underline">About Us</Link></li>
            <li><Link to="/aircon-installation" className="hover:underline">Aircon Installation</Link></li>
            <li><Link to="/aircon-service" className="hover:underline">Aircon Service & Repair</Link></li>
            <li><Link to="/heater-service" className="hover:underline">Heater Service & Repair</Link></li>
            <li><Link to="/government-rebate" className="hover:underline">Rebates</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Legal & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 mb-4">
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
          <h4 className="text-lg font-semibold mb-2">Socials</h4>
          <ul className="space-y-1">
            <li>
              <a
                href="https://maps.app.goo.gl/HpjDqFj2St8ubJn79"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Leave a Google Review
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-secondary text-center py-4 text-xs">
        <p>© {new Date().getFullYear()} Climate Co. All rights reserved.</p>
      </div>
    </footer>
  );
}
