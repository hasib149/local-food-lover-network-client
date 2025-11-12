import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <aside className="md:w-1/3 text-gray-300 space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/chicken-skewers-with-slices-apples-chili.png"
              alt="Food Lovers Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="font-bold text-2xl text-white">
              Local Food Lovers Network
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Local Food Lovers Network is a community-driven platform where food
            lovers share their experiences with local restaurants, street food,
            and home-cooked meals.
          </p>
        </aside>

        <div className="flex flex-col sm:flex-row md:w-2/3 justify-between gap-8">
          <nav>
            <h6 className="text-lg font-semibold mb-3 text-white">Services</h6>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a className="hover:text-white transition">Design</a>
              </li>
              <li>
                <a className="hover:text-white transition">Marketing</a>
              </li>
              <li>
                <a className="hover:text-white transition">Advertisement</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h6 className="text-lg font-semibold mb-3 text-white">Company</h6>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a className="hover:text-white transition">About us</a>
              </li>
              <li>
                <a className="hover:text-white transition">Contact</a>
              </li>
              <li>
                <a className="hover:text-white transition">Jobs</a>
              </li>
              <li>
                <a className="hover:text-white transition">Press kit</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h6 className="text-lg font-semibold mb-3 text-white">
              Social Media
            </h6>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://facebook.com/yourprofile"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/yourprofile"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FaTelegram /> Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FaXTwitter /> Twitter
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="mt-10 pt-5 border-t border-gray-800 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Local Food Lovers Network. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
