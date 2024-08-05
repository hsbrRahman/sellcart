import React from "react";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full h-[350px] bg-slate-600 text-white">
      <div className="h-[70%] flex flex-col md:flex-row justify-around">
        <div className="w-[90%] h-full  flex justify-around">
          <div className="p-4  w-[30%]">
            <p className="lg:text-3xl font-bold text-zinc-400">Where to buy</p>
            <br />

            <a className="lg:text-xl" href="">
              See authorized Retailers
            </a>
          </div>
          <div className="p-4 space-y-1 w-[30%]">
            <p className="lg:text-3xl font-bold text-zinc-400">News & Info</p>
            <br />
            <p> Press Releases</p>
            <p> Product Support</p>
            <p> Product Manuals</p>
            <p> Newsletter Signup</p>
            <p> Accessibility and Usability</p>
          </div>
          <div className="p-4 w-[30%] space-y-1">
            <p className="lg:text-3xl font-bold text-zinc-400"> Help & FAQ</p>
            <br />
            <p>Shipping</p>
            <p>Biling</p>
            <p>Customer Service</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className="h-[30%] w-full bg-slate-900">
        <div className="w-[90%] m-auto h-full">
          <div className="w-full h-full flex justify-around items-center">
            <div className="w-[30%] h-[20%] space-x-4">
              <label htmlFor="input">Sign up for newsletters:</label>
              <input
                type="email"
                className="p-2 rounded-xl"
                placeholder="Enter...."
              />
            </div>
            <div className="w-[30%] h-[20%]">
              Copyright <FaRegCopyright className="inline" />
              2024 <p>Hasibur Rahman</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
