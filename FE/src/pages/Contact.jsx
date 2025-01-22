import React, { useState } from "react";

// Add imports for your custom icons
import LinkedInIcon from "../icons/linkedin.png";
import LeetCodeIcon from "../icons/leetcode.png";
import GFGIcon from "../icons/gfg.png";
import CodewarsIcon from "../icons/codewars.png";
import MailIcon from "../icons/email.png"; // Your mail icon
import PhoneIcon from "../icons/phone.png"; // Your phone icon
import MapIcon from "../icons/map.png"; // Add a map icon image
import GitHubIcon from "../icons/github.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send your message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="w-full bg-gray-900 flex flex-col items-center px-4 py-12 overflow-x-hidden rounded-tr-[20%] rounded-tl-[20%] min-h-screen">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-center mb-8 text-white">
        Contact Me
      </h1>


    {/* Contact Section */}
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex flex-col space-y-6 p-6 bg-gray-800 text-white rounded-lg shadow-lg place-items-center justify-center">

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
            <a
              href="https://www.linkedin.com/in/haritha-s-7251a42b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125"
            >
              <img
                src={LinkedInIcon}
                alt="LinkedIn"
                className="w-16 h-16 hover:opacity-80"
              />
            </a>
            <a
              href="https://leetcode.com/u/harithas_jtbb2/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125"
            >
              <img
                src={LeetCodeIcon}
                alt="LeetCode"
                className="w-16 h-16 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/harithahara9za/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125"
            >
              <img
                src={GFGIcon}
                alt="GeeksForGeeks"
                className="w-16 h-16 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.codewars.com/users/HarithaJTBB"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-125"
            >
              <img
                src={CodewarsIcon}
                alt="Codewars"
                className="w-16 h-16 hover:opacity-80"
              />
            </a>
          </div>

          {/* Contact Icons */}

          <div className="grid grid-cols-3 gap-4">
            <a
              href="mailto:harithaharitha0862s@gmail.com"
              className="text-lg hover:text-blue-500 transition-all"
            >
              <img src={MailIcon} alt="Mail" className="w-16 h-16" />
            </a>

            <a
              href="tel:+919390810513"
              className="text-lg hover:text-blue-500 transition-all"
            >
              <img src={PhoneIcon} alt="Phone" className="w-16 h-16" />
            </a>

            <a
              href="https://github.com/harithas1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-blue-500 transition-all"
            >
              <img src={GitHubIcon} alt="GitHub" className="w-16 h-16" />
            </a>
          </div>

          {/* Google Maps Link */}
          <div className="mt-12 flex items-center space-x-4">
            <img src={MapIcon} alt="Google Maps" className="w-16 h-16" />
            <a
              href="https://www.google.com/maps/place/Lakkanapalli-517415,+Chittoor,+Andhra+Pradesh,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-blue-500 transition-all"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-semibold text-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {status && (
        <p className="mt-6 text-center text-lg text-green-500">{status}</p>
      )}
    </div>
  );
}
