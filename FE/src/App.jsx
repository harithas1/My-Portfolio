import React, { useState } from "react";
import Home from "./pages/Home.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col">
      {/* Navbar Section */}
      <header className="bg-gray-900 text-white p-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Portfolio</h1>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-6">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#home"
                  className="text-lg font-medium hover:text-purple-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-lg font-medium hover:text-purple-500 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-lg font-medium hover:text-purple-500 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="text-lg font-medium hover:text-purple-500 transition-colors"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg font-medium hover:text-purple-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <button onClick={toggleMobileMenu} className="sm:hidden text-3xl">
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden bg-gray-900 text-white space-y-4 p-4 sticky top-16 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="#home"
          className="block text-lg font-medium hover:text-blue-500"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#projects"
          className="block text-lg font-medium hover:text-blue-500"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#skills"
          className="block text-lg font-medium hover:text-blue-500"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Skills
        </a>
        <a
          href="#resume"
          className="block text-lg font-medium hover:text-blue-500"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Resume
        </a>
        <a
          href="#contact"
          className="block text-lg font-medium hover:text-blue-500"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </a>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white p-6 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Haritha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
