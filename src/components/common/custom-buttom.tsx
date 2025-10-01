import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";

export default function CustomButtom({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  return (
    <Link href={href} target="_blank">
      <Button
        variant={"outline"}
        className="text-xl bg-black dark:bg-white text-white dark:text-black dark:hover:text-white group py-5 px-10 mt-3 rounded-none flex gap-2 hover:bg-white hover:scale-105"
      >
        {children} <MoveUpRight className="bg-gradient group-hover:rotate-45 transition-all" />
      </Button>
    </Link>
  );
}
