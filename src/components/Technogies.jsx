import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind, TbBrandMongodb } from "react-icons/tb";
import {SiPostgresql} from "react-icons/si"

export default function Technogies() {
  return (
    <div className="mt-20">
      <h1
        className="text-2xl md:text-5xl font-bold text-gray-500 my-20 md:my-0 dark:text-gray-300  text-center"
        data-aos="slide-up"
      >
        Technologies, I use
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <FaReact size={150} color="cyan" className="w-full text-center mt-20" />
        <TbBrandNextjs
          size={150}
          color="black"
          className="w-full text-center mt-20 animate-bounce"
        />
        <TbBrandTailwind
          size={150}
          color="lightblue"
          className="w-full text-center mt-20"
        />
        <FaNodeJs
          size={150}
          color="#3c873a"
          className="w-full text-center mt-20 animate-bounce"
        />
        <FaBootstrap
          size={150}
          color="blue"
          className="w-full text-center mt-20 animate-bounce"
        />
        <FaJsSquare
          size={150}
          color="yellow"
          className="w-full text-center mt-20"
        />
        <FaHtml5
          size={150}
          color="orange"
          className="w-full text-center mt-20 animate-bounce"
        />
        <FaCss3
          size={150}
          color="#264de4"
          className="w-full text-center mt-20"
        />
        <SiPostgresql
            size={150}
            color="blue"
            className="w-full  text-center mt-20"
        />
        <TbBrandMongodb
            size={150}
            color="green"
            className="w-full text-center mt-20 animate-bounce"
        />
      </div>
    </div>
  );
}
