import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 py-6 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left">
          <h2 className="text-sm text-gray-600">
            © {new Date().getFullYear()} AI Trip Planner · Created by{" "}
            <span className="font-semibold text-gray-800">Reshu Jayant</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Plan your adventures with AI. Smart. Simple. Free.
          </p>
        </div>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a
            href="https://github.com/Rishurajput8279"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/reshu-jayant-248037258/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/rishurajput_2k03" // replace with your actual IG
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 text-xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
