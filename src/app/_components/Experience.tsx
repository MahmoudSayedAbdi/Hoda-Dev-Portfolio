import CustomButtom from "@/components/common/custom-buttom";
import React from "react";

const experiences = [
  {
    data: "Jul 2025- sep 2025",
    title: "Frontend Developer, Intern",
    company: "Elevate",
  },
  {
    data: "sep 2024- Jul 2025",
    title: "Frontend Developer, Course",
    company: "Route",
  },
  {
    data: "sep 2024- Present",
    title: "Frontend Developer",
    company: "freelance",
  },
];

export default function Experience() {
  return (
    <div className="p-10 text-white  grid gap-10 grid-cols-1 md:grid-cols-2 justify-between bg-gradient">
      <div className="col-span-1 flex flex-col gap-3">
        {/* header */}
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold">Experience</p>
          <p className="text-5xl font-bold uppercase">My Experience</p>
        </div>
        {/* text experience */}
        <p className="text-lg">
          I completed practical internships and built real-world projects deployed online. Skilled
          in API integration, performance optimization, and writing clean, maintainable code. Eager
          to contribute to dynamic teams and continuously grow in a professional environment.
        </p>

        {/* download cv */}
        <CustomButtom href="https://drive.google.com/uc?export=download&id=1DTUXwF6JRvYw9OGvR5uABG13e2bv1hGw">
          download my cv
        </CustomButtom>
      </div>
      <div className="col-span-1 flex flex-col">
        {experiences.map((item) => (
          <div key={item.company} className="flex flex-col gap-5 p-5 border-b dark:border-b-white">
            <div className="flex justify-between">
              <p className="font-bold text-lg">-{item.data}</p>
              <p className="font-medium text-base">-{item.company}</p>
            </div>
            <h5 className="font-bold text-4xl">{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
