import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import landingImage from "../../../public/assests/landingImage.webp";
import Image from "next/image";

/**
 * Home Component - Main landing section of the portfolio
 * Contains introduction text and hero image in a responsive grid layout
 */
export default function Home() {
  return (
    <div
      id="home"
      className="h-screen md:h-screen  grid  grid-cols-1 md:grid-cols-2 justify-between "
    >
      {/* LEFT SECTION - Introduction Text */}
      <div className="flex flex-col  md:h-screen items-center justify-center">
        <div className="flex flex-col gap-6 justify-center items-start relative z-10">
          {/* Main heading with gradient name */}
          <h2 className="text-3xl lg:text-5xl uppercase">
            My name is <span> </span>
            <strong className="font-bold bg-gradient text-transparent bg-clip-text">
              Mahmoud
              <br />
              Sayed...
            </strong>
          </h2>

          {/* Job title and location */}
          <p className="text-xl lg:text-2xl">
            <strong className="font-bold">front end developer</strong> based in Egypt
          </p>

          {/* Call-to-action button */}
          <Button
            variant={"outline"}
            className="text-xl bg-black dark:bg-white text-white dark:text-black py-5 px-10 mt-3 rounded-none flex gap-2"
          >
            Let&apos;s talk with me <MoveUpRight className="bg-gradient" />
          </Button>
        </div>
      </div>

      {/* RIGHT SECTION - Hero Image */}
      <div className="flex flex-col items-center justify-center ">
        {/* Portfolio hero image */}
        <Image src={landingImage} alt="landingImage" />
      </div>
    </div>
  );
}
