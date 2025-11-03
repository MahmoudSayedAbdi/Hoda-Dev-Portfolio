"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import github from "../../../public/assests/github.svg";
import instagram from "../../../public/assests/instagram.svg";
import linkedin from "../../../public/assests/linkedin.svg";
import Image from "next/image";

// Menu items
const items = [
  {
    title: "Home",
    url: "#home",
  },
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Services",
    url: "#services",
  },
  {
    title: "Projects",
    url: "#projects",
  },
  {
    title: "Contact",
    url: "#contact",
  },
];

const SocialNav = [
  {
    href: "https://github.com/MahmoudSayedAbdi",
    image: github,
  },
  {
    href: "https://www.instagram.com/",
    image: instagram,
  },
  {
    href: "https://www.linkedin.com/",
    image: linkedin,
  },
];

export function AppSidebar() {
  const [active, setActive] = useState<string>("#home");

  // Track scroll position and update active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px",
      },
    );

    // Find all sections
    const sections = items
      .map((item) => {
        const id = item.url.replace("#", "");
        return document.getElementById(id);
      })
      .filter(Boolean);

    // Observe all sections
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Handle navigation click
  const handleNavClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    setActive(url);

    const id = url.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Sidebar>
      {/* Sidebar Header */}
      <SidebarHeader>
        <SidebarGroup>
          <h1 className="font-extrabold text-4xl">HD</h1>
        </SidebarGroup>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.url}>
                  <Link
                    onClick={(e) => handleNavClick(e, item.url)}
                    href={item.url}
                    className="relative"
                  >
                    <span
                      className={cn(
                        "relative z-10 transition-colors duration-300",
                        active === item.url
                          ? "text-transparent bg-clip-text bg-gradient font-semibold"
                          : "",
                      )}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="flex flex-col gap-10 items-center text-center">
        <ModeToggle />
        <ul className="flex gap-2">
          {SocialNav.map((socialItem) => (
            <li
              key={socialItem.href}
              className="rounded-full border border-gray-700 p-2 bg-gray-100 transition-transform duration-200 hover:scale-110"
            >
              <Link href={socialItem.href}>
                <Image src={socialItem.image} alt={socialItem.image} />
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          Copyright ©2025 Mahmoud Sayed.
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>All right reserved.
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
