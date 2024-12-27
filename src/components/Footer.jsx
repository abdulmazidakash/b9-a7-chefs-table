import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r mt-8 from-gray-500 via-rose-500 to-red-500 text-white">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Name */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">
              Chef's Table
            </h1>
            <p className="text-sm">
              Discover the art of culinary excellence at Chef's Table. Where flavor meets passion.
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Menu</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-center md:justify-end space-x-4 text-2xl">
              <a href="#" className="hover:text-purple-300">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-purple-300">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-purple-300">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-purple-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Chef's Table. All rights reserved.
          </p>
          <p className="mt-2">
            <span className="font-semibold">Developed By:</span>{" "}
            <span className="text-gray-100 text-lg">
              <span className="typewriter-effect">Your Name</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
