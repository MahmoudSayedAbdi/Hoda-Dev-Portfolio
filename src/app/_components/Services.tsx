import Image from "next/image";
// import Image icon
import html5 from "../../../public/assests/html5-icon.webp";
import css3 from "../../../public/assests/css3-icon.webp";
import javascript from "../../../public/assests/javascript-icon.webp";
import Typescript from "../../../public/assests/Typescript-icon.webp";
import ReactIcon from "../../../public/assests/React-icon.webp";
import nextjs from "../../../public/assests/nextjs-icon.webp";
import Tailwind from "../../../public/assests/Tailwind-CSS-icon.webp";
import Bootstrap from "../../../public/assests/Bootstrap-icon.webp";
import materialUi from "../../../public/assests/material-ui-icon.webp";
import shadcn from "../../../public/assests/shadcn-ui-logo.webp";
import sass from "../../../public/assests/sass-icon.webp";
import redux from "../../../public/assests/redux-icon.webp";
import reactQuery from "../../../public/assests/react-query-icon.webp";
import reactRouter from "../../../public/assests/react-router-icon.svg";
import git from "../../../public/assests/git-icon.webp";
import github from "../../../public/assests/github-icon.webp";
const skills = [
  { icon: html5, title: "HTML" },
  { icon: css3, title: "CSS" },
  { icon: javascript, title: "JavaScript" },
  { icon: Typescript, title: "TypeScript" },
  { icon: ReactIcon, title: "React" },
  { icon: nextjs, title: "Next.js" },
  { icon: Tailwind, title: "Tailwind CSS" },
  { icon: Bootstrap, title: "Bootstrap" },
  { icon: materialUi, title: "Material-UI" },
  { icon: shadcn, title: "shadcn/ui" },
  { icon: sass, title: "Sass" },
  { icon: redux, title: "Redux" },
  { icon: reactQuery, title: "React Query" },
  { icon: reactRouter, title: "React Router" },
  { icon: git, title: "Git" },
  { icon: github, title: "GitHub" },
];
export default function Services() {
  return (
    <div id="services" className="flex flex-col">
      {/* services */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold"> specialties</p>
          <p className="text-5xl font-bold uppercase">my specialties</p>
        </div>
      </div>

      {/* skills */}
      <div className="px-10 bg-gradient text-white p-5">
        {/* header */}
        <div className="flex flex-col gap-4 mb-8">
          <p className="text-lg font-semibold">Skills</p>
          <p className="text-5xl font-bold uppercase">My Skills</p>
        </div>

        {/* content */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-white rounded-lg flex flex-col justify-center items-center gap-3 p-5"
            >
              <Image src={skill.icon} alt={skill.title} className="w-20 " />
              <p className="text-black">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
