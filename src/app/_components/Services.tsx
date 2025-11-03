"use client";
import { Plus, Minus } from "lucide-react";
import Skills from "./Skills";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const specialties = [
  {
    id: "1",
    title: "Frontend Development",
    desc: "I specialize in creating dynamic and modern web applications using React.js and Next.js. My focus is on writing clean, reusable, and maintainable code while following best practices. I integrate APIs, manage complex states with Redux Toolkit, and ensure that every feature works smoothly across all devices. My goal is to deliver high-quality applications that are fast, secure, and tailored to user needs.",
  },
  {
    id: "2",
    title: "Responsive Web Design",
    desc: "I design and implement websites that adapt seamlessly to any screen size—whether it's mobile, tablet, or desktop. By applying responsive design principles and using frameworks like Tailwind CSS and Bootstrap, I make sure that layouts remain consistent, functional, and visually appealing across all devices. This ensures that users always have a smooth browsing experience without compromising design or usability.",
  },
  {
    id: "3",
    title: "Performance Optimization",
    desc: "I transform UI/UX designs into fully functional, interactive, and pixel-perfect interfaces. Working closely with designers, I ensure that every element matches the design specifications while maintaining accessibility and usability. Using tools like Tailwind CSS, Bootstrap, and Material-UI, I bring ideas to life with animations, transitions, and micro-interactions that enhance the user experience.",
  },
  {
    id: "4",
    title: "UI Implementation",
    desc: "I make websites faster, smoother, and more efficient by applying optimization techniques such as code splitting, lazy loading, caching, and image compression. I focus on improving Core Web Vitals, ensuring high Lighthouse scores, and reducing load times to keep users engaged. My goal is to create web applications that not only look good but also perform exceptionally well on all devices and networks.",
  },
];

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div id="services" className="flex flex-col">
      {/* services */}
      <div className="p-5 px-10">
        <div className="flex flex-col gap-4 mb-8">
          <p className="text-lg font-semibold">Specialties</p>
          <p className="text-5xl font-bold uppercase">My specialties</p>
        </div>

        {/* content */}
        <div className="flex flex-col gap-3">
          {specialties.map((item) => (
            <div key={item.id} className="border-b border-gray-300 pb-3">
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-2xl md:text-3xl bg-gradient text-transparent bg-clip-text">
                    {item.title}
                  </h4>
                  <Button
                    onClick={() => toggleItem(item.id)}
                    variant="ghost"
                    size="icon"
                    className="hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className={`transition-transform duration-300 ${openId === item.id ? 'rotate-45' : 'rotate-0'}`}>
                      <Plus className="w-6 h-6" />
                    </div>
                  </Button>
                </div>

                {/* Animated Content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openId === item.id
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* skills */}
      <Skills />
    </div>
  );
}
