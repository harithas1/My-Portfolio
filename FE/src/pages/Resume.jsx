import React from "react";
import hari from "../assets/hari.png";



export default function Resume() {
  return (
    <div className="text-white px-4 py-12 relative min-h-screen lg:top-32">
      {/* Background Gradients */}
      <div className="absolute top-5 left-5 w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full blur-lg opacity-30"></div>
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full blur-sm opacity-15"></div>
      <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full blur-md opacity-25"></div>
      <div className="absolute bottom-20 right-5 w-28 h-28 bg-yellow-500 rounded-full blur-sm opacity-10"></div>

      {/* Main Resume Content */}
      <div className="relative bg-slate-900  bg-opacity-90 shadow-lg rounded-lg p-6 sm:p-10 max-w-5xl  mx-auto flex flex-col sm:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={hari}
            alt="S Haritha"
            className="w-40 h-40 object-cover sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64  rounded-full shadow-md"
          />
        </div>

        {/* About and Buttons */}
        <div className="flex flex-col justify-center">
          {/* About Me Section */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold">S Haritha</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-4">
              Full Stack Developer
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I am a passionate Full Stack Developer with expertise in modern
              technologies such as React, Node.js, Express, and PostgreSQL. I
              specialize in building scalable and user-friendly web applications
              while continuously learning and evolving in the tech landscape.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-4">
            <a
              href="https://drive.google.com/file/d/13RboZ3jmGx0LwXIo64zpWqcVb3OFbWQM/view?usp=drive_link"
              download
              target="_blank"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors"
            >
              📄 Resume
            </a>
            <a
              href="mailto:harithaharitha0862s@gmail.com"
              target="_blank"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium shadow-md hover:bg-green-700 transition-colors"
            >
              🤝 Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
