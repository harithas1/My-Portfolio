import React, { useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

// Import skill icons
import github from "../icons/github.png";
import vscode from "../icons/vscode.png";
import ubuntu from "../icons/ubuntu.png";
import postman from "../icons/postman.png";
import pgadmin from "../icons/pgadmin.png";
import react from "../icons/react.png";
import tailwind from "../icons/tailwind.png";
import shadcn from "../icons/shadcn.png";
import html from "../icons/html.png";
import css from "../icons/css.png";
import javascript from "../icons/javascript.png";
import nodeJS from "../icons/nodeJS.png";
import expressJS from "../icons/expressJS.png";
import python from "../icons/python.png";
import postgresql from "../icons/postgresql.png";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "ShadCN", icon: shadcn },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: nodeJS },
      { name: "Express", icon: expressJS },
      { name: "PostgreSQL", icon: postgresql },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Postman", icon: postman },
      { name: "PgAdmin", icon: pgadmin },
      { name: "VS Code", icon: vscode },
      { name: "Git", icon: github },
      { name: "Ubuntu", icon: ubuntu },
    ],
  },
  {
    name: "Other",
    skills: [{ name: "Python", icon: python }],
  },
];

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState("Frontend");

  return (
    <div className="text-white px-4 py-12 relative min-h-screen">
      <div className="absolute top-5 left-5 w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full blur-lg opacity-30"></div>
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full blur-sm opacity-15"></div>
      <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full blur-md opacity-25"></div>
      <div className="absolute bottom-20 right-5 w-28 h-28 bg-yellow-500 rounded-full blur-sm opacity-10"></div>
      {/* Title */}
      <h1 className="text-center text-5xl font-bold mb-8">My Skills</h1>
      {/* Dropdown for small screens */}
      <div className="sm:hidden mb-6">
        <select
          className="w-full p-2 bg-slate-800 text-white rounded-lg"
          onChange={(e) => setSelectedTab(e.target.value)}
          value={selectedTab}
        >
          {skillCategories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {/* Tabs for larger screens */}
      <div className="hidden sm:block mb-6">
        <div className="flex justify-center space-x-4">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              className={`px-6 py-2 rounded-lg transition ${
                selectedTab === category.name
                  ? "bg-white text-black hover:bg-slate-100"
                  : "bg-slate-700 text-white hover:bg-slate-600"
              }`}
              onClick={() => setSelectedTab(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Display skills for the selected category */}
      {/* grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      lg:grid-cols-4 xl:grid-cols-5 gap-4 */}
      <div className="flex flex-wrap justify-center gap-4">
        {skillCategories
          .find((category) => category.name === selectedTab)
          .skills.map((skill) => (
            <Card
              key={skill.name}
              className="cursor-pointer bg-slate-800 hover:bg-slate-700 transition-transform transform hover:scale-105 p-3 rounded-lg flex flex-col items-center justify-center text-center h-[200px] w-[200px] sm:h-[220px] sm:w-[220px] md:h-[240px] md:w-[240px] border border-white"
            >
              <CardHeader className="flex flex-col items-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-3"
                />
                <CardTitle className="text-sm sm:text-base md:text-lg font-medium text-white">
                  {skill.name}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
      </div>
    </div>
  );
}


