import React from "react";
import myImage from "../../../public/assests/myImage.svg";
import Image from "next/image";
import { ContactRound, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Experience from "./Experience";
import CustomButtom from "@/components/common/NavigetButtom";

export default function About() {
  return (
    <div id="about" className="flex flex-col">
      <div className="p-10 grid gap-10 grid-cols-1 md:grid-cols-3 justify-between">
        {/* left side */}
        <div className="md:col-span-1 flex flex-col md:h-screen items-center justify-center">
          <div className="flex flex-col gap-6 justify-center items-start relative z-10">
            <p className="text-xl lg:text-2xl">Nice to meet you!</p>
            <h4 className="text-3xl lg:text-5xl font-bold uppercase">Welcome to...</h4>
            <div className="flex flex-col justify-center items-center text-center">
              <Image src={myImage} alt="myImage" />

              <h2 className="text-3xl lg:text-5xl font-bold bg-gradient text-transparent bg-clip-text">
                Mahmoud Sayed
              </h2>

              <p className="text-xl lg:text-2xl">
                <strong className="font-bold">front end developer</strong> based in Egypt
              </p>
              <CustomButtom href="https://docs.google.com/document/d/1DTUXwF6JRvYw9OGvR5uABG13e2bv1hGw/edit?usp=drive_link&ouid=106354110286437861818&rtpof=true&sd=true">
                View My CV
              </CustomButtom>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
          <div className="flex flex-col ">
            {/* about me  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5  border-b-2 py-10 mb-10">
              {/* phone */}
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=%2B201113404148&text&type=phone_number&app_absent=0"
                }
                target="_blank"
                className="block"
              >
                <div className="flex justify-start items-center gap-2">
                  <span className="p-2 rounded-full  text-black bg-white">
                    <Phone size={20} />
                  </span>
                  <span>+201113404148</span>
                </div>
              </Link>

              {/* Years */}
              <div className="flex justify-start items-center gap-2">
                <span className="p-2 rounded-full  text-black bg-white">
                  <ContactRound size={20} />
                </span>
                23 years
              </div>

              {/* Mail */}
              <Link href={"mailto:mahmoudsayed.2003.8@email.com"} target="_blank" className="block">
                <div className="flex justify-start items-center gap-2">
                  <span className="p-2 rounded-full  text-black bg-white">
                    <Mail size={20} />
                  </span>
                  <span>mahmoudsayed.2003.8@email.com</span>
                </div>
              </Link>

              {/* city */}
              <div className="flex justify-start items-center gap-2">
                <span className="p-2 rounded-full  text-black bg-white">
                  <MapPin size={20} />
                </span>
                Egypt, Qena
              </div>
            </div>

            {/* info */}
            <div className="col-span-1">
              <h5 className=" font-bold flex gap-2 justify-start items-center">
                <span className="text-5xl bg-gradient text-transparent bg-clip-text"> 1+</span>{" "}
                <p className="text-lg  ">
                  Years <br /> experience...
                </p>
              </h5>

              <p>
                Hello there! My name is{" "}
                <span className="bg-gradient text-transparent bg-clip-text">Mahmoud Sayed</span>. I
                am a Frontend Developer with hands-on experience building responsive and
                user-focused web applications using Next.js, React.js, Redux(or Shadcn) Toolkit, and
                modern UI libraries like Tailwind CSS and Bootstrap .
              </p>
            </div>

            {/* note */}
            <div className="bg-black  rounded-lg dark:bg-white flex justify-center items-center mt-10 p-3">
              <p className="font-bold text-9xl text-gray-500 flex justify-center items-center">“</p>
              <p className="text-white dark:text-black font-semibold text-xl">
                “You might not think of programmers as artists, but programming is a very creative
                profession. It&apos;s creativity based on logic.” - John Romero
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Experience */}
      <Experience />
    </div>
  );
}
