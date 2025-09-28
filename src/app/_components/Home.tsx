import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import landingImage from "../../../public/assests/landingImage.webp";
import Image from "next/image";
export default function Home() {
  return (
    <div
      id="home"
      className="bg-white dark:bg-black dark:text-white text-black h-screen md:h-screen  grid  grid-cols-1 md:grid-cols-2 justify-between "
    >
      <div className="flex flex-col  md:h-screen items-center justify-center">
        <div className="flex flex-col gap-6 justify-center items-start relative z-10">
          <h2 className="text-3xl lg:text-5xl uppercase">
            My name is <span> </span>
            <strong className="font-bold bg-gradient text-transparent bg-clip-text">
              Mahmoud
              <br />
              Sayed...
            </strong>
          </h2>
          <p className="text-xl lg:text-2xl">
            <strong className="font-bold">front end developer</strong> based in Egypt
          </p>
          <Button
            variant={"outline"}
            className="text-xl bg-black dark:bg-white text-white dark:text-black py-5 px-10 mt-3 rounded-none flex gap-2"
          >
            Let&apos;s talk with me <MoveUpRight className="bg-gradient" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <Image src={landingImage} alt="landingImage" />
      </div>
    </div>
  );
}
