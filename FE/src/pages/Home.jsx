import { useState, useEffect } from "react";
import hari from "../assets/hari.png";

export default function Home() {
  const DynamicText = () => {
    const text = "Full Stack Developer..."; // Define your single string here
    const [displayText, setDisplayText] = useState(""); // State for displayed text
    const [letterIdx, setLetterIdx] = useState(0); // Index of the current letter
    const [isErasing, setIsErasing] = useState(false); // Flag for erasing or writing
    const writingSpeed = 300; // Speed for writing each letter
    const erasingSpeed = 150; // Speed for erasing each letter

    useEffect(() => {
      let timer;

      if (!isErasing && letterIdx < text.length) {
        // Add letters one by one
        timer = setTimeout(() => {
          setDisplayText((prev) => prev + text.charAt(letterIdx));
          setLetterIdx((prev) => prev + 1);
        }, writingSpeed);
      } else if (isErasing && letterIdx > 0) {
        // Remove letters one by one
        timer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setLetterIdx((prev) => prev - 1);
        }, erasingSpeed);
      } else if (!isErasing && letterIdx === text.length) {
        // Pause before erasing starts
        timer = setTimeout(() => setIsErasing(true), 1000);
      } else if (isErasing && letterIdx === 0) {
        // Pause before writing starts again
        timer = setTimeout(() => setIsErasing(false), 500);
      }

      return () => clearTimeout(timer); // Cleanup timeout
    }, [letterIdx, isErasing, text]);

    return <span>{displayText}</span>;
  };

  return (
    <div>
      <section
        id="home"
        className="flex flex-col sm:gap-8 lg:px-20 sm: px-6 justify-center items-center min-h-screen relative lg:flex-row lg:justify-between"
      >
        {/* Text Section */}
        <article className="flex flex-col gap-6 text-center md:text-center lg:text-start lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-poppins">
            Hi, I'm S Haritha
          </h2>
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-white hover:to-purple-500 font-poppins">
            <DynamicText />
          </h1>
        
          <p className="text-lg sm:text-xl text-white font-opensans max-w-md">
            I am passionate about creating scalable and efficient web
            applications using modern technologies like React, Node.js, and
            PostgreSQL. My focus is on delivering user-friendly,
            high-performance solutions that make a difference.
            {/* I am passionate about building scalable and efficient
            web applications. I specialize in modern technologies like React,
            Node.js, Express, and PostgreSQL. My focus is on crafting
            user-friendly solutions that are both efficient and scalable. I
            thrive on solving complex problems, writing clean and maintainable
            code, and continuously learning to stay ahead in the ever-evolving
            tech landscape. */}
          </p>
        </article>

        {/* Image Section */}
        <article className="relative flex justify-center items-center mt-8 sm:mt-12 lg:mt-0">
          {/* Image with square shape */}
          <img
            className="w-48 h-48 rounded-b-[10%] sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] object-cover"
            src={hari}
            alt="Profile"
          />
        </article>

        {/* Glowing Circles and Shapes positioned at different locations on the page */}
        <div className="absolute top-5 left-5 w-20 h-20 bg-white rounded-full blur-lg opacity-30"></div>
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full blur-sm opacity-15"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full blur-md opacity-25"></div>
        <div className="absolute bottom-20 right-5 w-28 h-28 bg-white rounded-xl blur-sm opacity-10"></div>
        <div className="absolute top-16 left-32 w-32 h-32 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full blur-md opacity-20"></div>
        <div className="absolute bottom-8 left-8 w-24 h-24 bg-pink-500 rounded-full blur-sm opacity-15"></div>
        <div className="absolute top-8 right-16 w-28 h-28 bg-yellow-500 rounded-tr-3xl rounded-bl-3xl blur-lg opacity-20"></div>
      </section>
    </div>
  );
}
