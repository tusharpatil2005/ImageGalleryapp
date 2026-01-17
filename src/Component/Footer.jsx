import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-2">About</h2>
          <p className="text-gray-400">
            This is a beautiful Image Gallery app built with React. Explore a wide range of images and enjoy a modern UI experience.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <ul className="text-gray-400">
            <li>Name: Tushar Patil</li>
            <li>Email: tusharpatil200581@gmail.com</li>
            <li>Phone: +91 7600565179</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-2">Follow Me</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Tushar Patil. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
