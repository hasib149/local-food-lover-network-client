import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
        <aside className="md:flex-1 text-gray-300 max-w-sm">
          <p className="leading-relaxed">
            <span className="font-bold text-2xl">
              Local Food Lovers Network
            </span>
            <br />
            Local Food Lovers Network is a community-driven platform where food
            enthusiasts can share their experiences with local restaurants,
            street food, and home-cooked meals.
          </p>
        </aside>

        <div className="md:flex md:flex-1 justify-between gap-8">
          <nav className="flex-1">
            <h6 className="footer-title text-lg font-semibold mb-3">
              Services
            </h6>
            <div className="flex flex-col gap-2">
              <a className="link link-hover">Home</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </div>
          </nav>

          <nav className="flex-1">
            <h6 className="footer-title text-lg font-semibold mb-3">Company</h6>
            <div className="flex flex-col gap-2">
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
          </nav>

          <nav className="flex-1">
            <h6 className="footer-title text-lg font-semibold mb-3">
              Social Media
            </h6>
            <div className="flex flex-col gap-2">
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover flex items-center gap-2"
              >
                <FaFacebook /> Facebook
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover flex items-center gap-2"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="https://t.me/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover flex items-center gap-2"
              >
                <FaTelegram /> Telegram
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover flex items-center gap-2"
              >
                <FaXTwitter /> Twitter
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div className=" mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Local Food Lovers Network. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
