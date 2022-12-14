import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto px-10 sm:text-center   sm:max-w-xl md:max-w-full lg:max-w-screen-xl pt-4">
        <div className="flex flex-col-reverse border-black justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2020 Md. Mahadi Hasan. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
