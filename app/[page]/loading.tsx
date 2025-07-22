import { div } from "framer-motion/client";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="relative w-24 h-24 rounded-full animate-spin-slow bg-gradient-to-br from-purple-500 via-sky-300 to-teal-400">
        <span className="absolute w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-sky-300 to-teal-400 blur-sm"></span>
        <span className="absolute w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-sky-300 to-teal-400 blur-md"></span>
        <span className="absolute w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-sky-300 to-teal-400 blur-xl"></span>
        <span className="absolute w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-sky-300 to-teal-400 blur-3xl"></span>
        <div className="absolute inset-2 bg-white border-4 border-white rounded-full"></div>
      </div>
    </div>
  );
};

export default loading;
