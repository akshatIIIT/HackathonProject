import React from 'react';

const Footer = () => {
  return (
    <>
      <footer id="contact" className="bg-white py-10 mt-16 px-4">
        <div className="container mx-auto lg:px-8 flex flex-col md:flex-row items-start">
          {/* Logo */}
          <div className="w-full md:w-1/5 text-center md:text-left mb-8 md:mb-0 flex justify-center md:justify-start">
            <img src="/logo-1.png" alt="Logo" className="w-24 h-auto" />
          </div>

          {/* Footer Content */}
          <div className="w-full md:w-4/5">
            <div className="flex flex-wrap justify-around gap-y-10">
              {/* Address */}
              <div className="w-full sm:w-1/2 md:w-1/5 text-center md:text-left">
                <h4 className="font-bold mb-4 text-black">ADDRESS</h4>
                <p className="text-gray-700 text-sm">
                  Okhla Industrial Estate, Phase III, near Govind Puri Metro Station, New Delhi, Delhi 110020
                </p>
              </div>

              {/* Call Info */}
              <div className="w-full sm:w-1/2 md:w-1/5 text-center md:text-left">
                <h4 className="font-bold mb-4 text-black">CALL FOR QUERY</h4>
                <p className="text-gray-700 text-sm">+91 8595192809</p>
              </div>

              {/* Email */}
              <div className="w-full sm:w-1/2 md:w-1/5 text-center md:text-left">
                <h4 className="font-bold mb-4 text-black">SEND US A MESSAGE</h4>
                <p className="text-gray-700 text-sm">
                  <a href="mailto:Collab@Work.ac.in" className="hover:text-gray-900 transition duration-300">
                    Collab@work.ac.in
                  </a>
                </p>
              </div>

              {/* Quick Links */}
              <div className="w-full sm:w-1/2 md:w-1/5 text-center md:text-left">
                <h4 className="font-bold mb-4 text-black">Quick Links</h4>
                <ul className="text-gray-700 text-sm">
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-900 transition duration-300">Instagram</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-900 transition duration-300">Twitter</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-900 transition duration-300">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="h-20 w-full text-center text-gray-800 flex items-center justify-center border-t">
        <p className="text-sm font-semibold">
          made with ♡ by <span className="text-[#1FBEFF]">AKSHAT</span> and Team
        </p>
      </div>
    </>
  );
};

export default Footer;
