import CustomButtom from "@/components/common/custom-buttom";
import Image from "next/image";
import React from "react";
import ForeverEcommerce from "../../../public/assests/forever-ecommerce.webp";
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
          <div className="flex flex-col lg:flex-row gap-10 justify-between">
            {/* row 1 */}
            <div className="flex flex-col gap-3">
              <h5 className="uppercase font-bold text-xl">Forever E-commerce</h5>
              <p className="text-gray-500">
                A fully functional e-commerce platform built using React.js, Bootstrap, and
                Firebase. Features: product listing, search, cart, checkout, and authentication.
                Focused on performance optimization and cross-browser compatibility. Deployed the
                application online, ensuring accessibility and real-world usability.
              </p>
              <div className="flex gap-3">
                <CustomButtom href="..">view project</CustomButtom>
                <CustomButtom href="..">Source Code</CustomButtom>
              </div>
            </div>
            {/* row 2 / image*/}
            <div className=" flex justify-center items-center shadow-2xl">
              <Image src={ForeverEcommerce} alt="Forever Ecommerce" className="w-full rounded-lg" />
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col lg:flex-row gap-10 justify-between">
            {/* row 1 */}
            <div className="flex flex-col gap-3">
              <h5 className="uppercase font-bold text-xl">Forever E-commerce</h5>
              <p className="text-gray-500">
                A fully functional e-commerce platform built using React.js, Bootstrap, and
                Firebase. Features: product listing, search, cart, checkout, and authentication.
                Focused on performance optimization and cross-browser compatibility. Deployed the
                application online, ensuring accessibility and real-world usability.
              </p>
              <div className="flex gap-3">
                <CustomButtom href="..">view project</CustomButtom>
                <CustomButtom href="..">Source Code</CustomButtom>
              </div>
            </div>
            {/* row 2 / image*/}
            <div className=" flex justify-center items-center shadow-2xl">
              <Image src={ForeverEcommerce} alt="Forever Ecommerce" className="w-full rounded-lg" />
            </div>
          </div>
        </div>

        <div className="w-full flex  justify-center mt-10">
          <CustomButtom href="https://github.com/MahmoudSayedAbdi">All Project</CustomButtom>
        </div>
      </div>
    </div>
  );
}
