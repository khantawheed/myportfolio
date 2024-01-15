import React from 'react';
import { FaLinkedin, FaTwitterSquare, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tawheed Khan. All rights reserved.
        </p>
        <div className="flex justify-center mt-2">
          {/* Social media icons with links */}
          <a href="https://twitter.com/your_twitter_profile" className="text-sky-500 hover:underline mx-2">
            <FaTwitterSquare className="text-lg" />
          </a>
          <a href="https://linkedin.com/in/tawheed-khan-21114115a" className="text-sky-500 hover:underline mx-2">
            <FaLinkedin className="text-lg" />
          </a>
          <a href="https://instagram.com/_khan_tawheed_/" className="text-sky-500 hover:underline mx-2">
            <FaInstagram className="text-lg" />
          </a>
          <a href="https://facebook.com/profile.php?id=100086464789996" className="text-sky-500 hover:underline mx-2">
            <FaFacebook className="text-lg" />
          </a>
          <a href="mailto:khankhantawheed12@gamil.com" className="text-sky-500 hover:underline mx-2">
            <FaEnvelope className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
