import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import quizPython from "../assets/quizPython.png";
import miniBank from "../assets/miniBank.png";
import game2048 from "../assets/game2048.png";
import blushBlooms from "../assets/blushBlooms.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const renderCarousel = (filteredProjects) => (
  <div className="relative w-full max-w-screen-xl mx-auto">
    <Carousel className="w-full overflow-hidden">
      <CarouselContent className="grid gap-x-6 grid-flow-col auto-cols-[80%] sm:auto-cols-[50%] md:auto-cols-[33.333%] lg:auto-cols-[25%] sm:items-center place-items-center">
        {filteredProjects.map((project) => (
          <CarouselItem
            key={project.id}
            className="sm: w-[300px] md:w-[280px] lg:w-[280px] p-4 bg-black rounded-lg shadow-lg overflow-hidden h-[320px] mx-auto my-4 flex flex-col justify-between items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl border"
          >
            <div className="w-[160px] h-[160px] mx-auto bg-gray-200 flex items-center justify-center rounded-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col justify-center h-[130px]">
              <h2 className="text-lg font-semibold text-center text-gray-600 mb-2 hover:text-purple-500 transition-colors duration-300">
                {project.title}
              </h2>
              <div
                className={`flex ${
                  project.liveDemo ? "justify-between" : "justify-center"
                } text-sm space-x-4 font-bold`}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:underline transition-colors duration-300"
                >
                  GitHub
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600">
        &lt;
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600">
        &gt;
      </CarouselNext>
    </Carousel>
  </div>
);

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 3,
      sub: "Frontend",
      title: "2048 Game",
      image: game2048,
      github: "https://github.com/harithas1/tile-game-2048",
      liveDemo: "https://harithas1.github.io/tile-game-2048/",
    },
    {
      id: 4,
      sub: "Frontend",
      title: "Blush Blooms",
      image: blushBlooms,
      github: "https://github.com/harithas1/blush-blooms",
      liveDemo: "https://harithas1.github.io/blush-blooms/",
    },
    {
      id: 1,
      sub: "Python",
      title: "Quiz Project",
      image: quizPython,
      github: "https://github.com/harithas1/Quiz_project",
    },
    {
      id: 2,
      sub: "Python",
      title: "Mini-Bank-Simulator",
      image: miniBank,
      github: "https://github.com/harithas1/Mini-Bank-Simulator",
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.sub.toLowerCase() === selectedCategory
        );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <div className="absolute top-5 left-5 w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full blur-lg opacity-30"></div>
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full blur-sm opacity-15"></div>
      <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full blur-md opacity-25"></div>
      <div className="absolute bottom-20 right-5 w-28 h-28 bg-yellow-500 rounded-full blur-sm opacity-10"></div>

      <h1 className="text-5xl font-semibold text-white mb-8 text-center text-shadow-lg">
        Projects
      </h1>

      <Tabs defaultValue="all" className="flex flex-col items-center w-full">
        {/* Dropdown for small screens */}
        <div className="sm:hidden mb-6 w-full">
          <select
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
          >
            <option value="all">All</option>
            <option value="frontend">Frontend</option>
            <option value="python">Python</option>
          </select>
        </div>

        <TabsList className="hidden sm:flex bg-transparent gap-4 mb-8 ">
          <TabsTrigger
            value="all"
            className="px-6 py-2 rounded-lg text-md bg-slate-700 text-white hover:bg-slate-600 focus:ring-2 focus:ring-white transition-all duration-300"
            onClick={() => setSelectedCategory("all")}
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="frontend"
            className="px-6 py-2 rounded-lg text-md bg-slate-700 text-white hover:bg-slate-600 focus:ring-2 focus:ring-white transition-all duration-300"
            onClick={() => setSelectedCategory("frontend")}
          >
            Frontend
          </TabsTrigger>
          <TabsTrigger
            value="python"
            className="px-6 py-2 rounded-lg text-md bg-slate-700 text-white hover:bg-slate-600 focus:ring-2 focus:ring-white transition-all duration-300"
            onClick={() => setSelectedCategory("python")}
          >
            Python
          </TabsTrigger>
        </TabsList>

        <div className="min-h-[400px] w-full">
          <TabsContent value="all">
            {renderCarousel(filteredProjects)}
          </TabsContent>
          <TabsContent value="python">
            {renderCarousel(
              filteredProjects.filter((project) => project.sub === "Python")
            )}
          </TabsContent>
          <TabsContent value="frontend">
            {renderCarousel(
              filteredProjects.filter((project) => project.sub === "Frontend")
            )}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
