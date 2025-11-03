import CustomButtom from "@/components/common/custom-buttom";
import Image from "next/image";
import React from "react";
import FitnessApp from "../../../public/assests/fitness-app.webp";
import FlowerApp from "../../../public/assests/flower-app.webp";
import Ecommerce from "../../../public/assests/e-commerce-app.webp";

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col">
      {/* Projects */}
      <div className="px-10 p-5">
        {/* header */}
        <div className="flex flex-col gap-4 mb-8">
          <p className="text-lg font-semibold">Projects</p>
          <p className="text-5xl font-bold uppercase">My projects</p>
        </div>

        {/* content */}
        <div className="flex flex-col gap-10">
          {/* 1 */}
          <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
            {/* row 1 */}
            <div className="flex flex-col gap-3 lg:w-1/2">
              <h5 className="uppercase font-bold text-xl">Fitness app</h5>
              <p className="text-gray-500">
                A comprehensive fitness application built with React, TypeScript,
                and Vite. This project was developed collaboratively as part of a team effort,
                focusing on user authentication, profile management, and AI-powered features.
              </p>
              <div className="flex gap-3">
                <CustomButtom href="https://fitness-app-khaki-tau.vercel.app/">view project</CustomButtom>
                <CustomButtom href="https://github.com/MahmoudSayedAbdi/fitness-app">Source Code</CustomButtom>
              </div>
            </div>
            {/* row 2 / image*/}
            <div className="lg:w-1/2 w-full h-[400px] flex justify-center items-center shadow-2xl rounded-lg overflow-hidden">
              <Image
                src={FitnessApp}
                alt="Fitness app Image"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
            {/* row 1 */}
            <div className="flex flex-col gap-3 lg:w-1/2">
              <h5 className="uppercase font-bold text-xl">E-commerce</h5>
              <p className="text-gray-500">
                A modern e-commerce platform built with Next.js, featuring a responsive design with Tailwind CSS,
                efficient data fetching using React Query, and elegant UI components from ShadCN UI.
                The application includes product browsing, shopping cart functionality, and seamless user experience.
              </p>
              <div className="flex gap-3">
                <CustomButtom href="..">view project</CustomButtom>
                <CustomButtom href="..">Source Code</CustomButtom>
              </div>
            </div>
            {/* row 2 / image*/}
            <div className="lg:w-1/2 w-full h-[400px] flex justify-center items-center shadow-2xl rounded-lg overflow-hidden">
              <Image
                src={Ecommerce}
                alt="E-commerce app image"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          {/* 3 */}
          <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
            {/* row 1 */}
            <div className="flex flex-col gap-3 lg:w-1/2">
              <h5 className="uppercase font-bold text-xl">Forever E-commerce</h5>
              <p className="text-gray-500">
                A full-featured flower shop e-commerce application built with Next.js.
                The platform offers interactive user interfaces using Tailwind CSS, React Query for data management,
                and ShadCN UI components for a polished user experience. Supports multiple languages and smooth navigation.
              </p>
              <div className="flex gap-3">
                <CustomButtom href="https://elevate-flower-app-eight.vercel.app/en">view project</CustomButtom>
                <CustomButtom href="https://github.com/MahmoudSayedAbdi/Elevate-Flower-App">Source Code</CustomButtom>
              </div>
            </div>
            {/* row 2 / image*/}
            <div className="lg:w-1/2 w-full h-[400px] flex justify-center items-center shadow-2xl rounded-lg overflow-hidden">
              <Image
                src={FlowerApp}
                alt="Forever Ecommerce"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-10">
          <CustomButtom href="https://github.com/MahmoudSayedAbdi">All Project</CustomButtom>
        </div>
      </div>
    </div>
  );
}
