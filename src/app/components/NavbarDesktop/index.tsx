"use client";

import Link from "next/link";
import SideArrowIcon from "../Icons/side-arrow";
import SSTraderNavLogo from "../Icons/sstrader-nav-logo";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { navbarElements } from "@/app/fixtures/data";

import { useEffect, useRef, useState } from "react";
import { NavbarProps } from "../types";
import { useScrollContext } from "@/app/hooks/useScrollContext";
import { CustomLink } from "../CustomLink";
import useFooterVisible from "@/app/hooks/useFooterVisible";

const NavbarDesktop = () => {
  const { isWindowScrolled, isFooterReached } = useScrollContext();
  const [isNavbarOpen, setIsNavbarOpen] = useState({
    research: false,
    api: false,
    chatGPT: false,
    company: false,
  });

  const [, setLastClickedItem] = useState<string | null>(null);
  const isFooterVisible = useFooterVisible();

  const toggleDropdown = (item: keyof NavbarProps) => {
    // Close all previously opened dropdown menus
    const updatedState: any = {};
    Object.keys(isNavbarOpen).forEach((key) => {
      updatedState[key as keyof NavbarProps] = false;
    });

    // Toggle the clicked dropdown
    updatedState[item] = !isNavbarOpen[item];
    setIsNavbarOpen(updatedState);
  };

  const wrapperRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        // Click occurred outside of the navbar menu, so close all dropdown menus
        setIsNavbarOpen({
          research: false,
          api: false,
          chatGPT: false,
          company: false,
        });
        setLastClickedItem(null);
      }
    }

    // Add event listener when component mounts
    document.addEventListener("mouseup", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [wrapperRef]);

  if (isFooterVisible) {
    // Return null to hide the navbar if the footer is visible
    return null;
  }

  return (
    <header
      className={`flex flex-col md:flex-row gap-12 w-full h-16 transition-all z-50 duration-300 space-x-10 md:px-4 bg-black top-0 left-0 ${
        isWindowScrolled && !isFooterReached
          ? "bg-black transition-colors fixed"
          : "bg-transparent sticky"
      }`}
    >
      <CustomLink
        href="/"
        icon={
          <SSTraderNavLogo
            width={164}
            height={56}
            className="cursor-pointer md:w-[140px] md:h-[60px] xl:w-[164px] xl:h-[56px] text-logoColor xl:mt-2"
          />
        }
      />
      <nav className="flex flex-row items-center self-center justify-center font-sourceSansProFont space-x-4">
        <ul
          ref={wrapperRef}
          className="flex flex-row space-x-8 w-auto bg-inherit border-none text-white border-[1px] border-borderWhite/30 rounded-sm mt-1 cursor-pointer text-lg font-sourceSansProFont bg-black"
        >
          {navbarElements.map((element) => (
            <li
              key={element.id}
              value={element.href}
              onClick={() =>
                toggleDropdown(element.id as unknown as keyof NavbarProps)
              }
              className="flex flex-row text-white items-center text-xl font-sourceSansProFont cursor-pointer hover:underline hover:decoration-1 underline-offset-4"
            >
              {element.name}
              {isNavbarOpen[element.id as unknown as keyof NavbarProps] ? (
                <>
                  <ul
                    className={`absolute top-[3rem] space-y-1 px-2 py-2 ${
                      isWindowScrolled && !isFooterReached
                        ? "bg-black z-100 transition-colors fixed rounded-sm"
                        : "bg-transparent"
                    } `}
                  >
                    {element.items?.map((item) => (
                      <li
                        key={item.id}
                        className="mt-2 hover:underline text-white text-lg font-sourceSansProFont"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                  <ChevronUpIcon className="text-white w-4 h-4 inline-block cursor-pointer" />
                </>
              ) : (
                <ChevronDownIcon className="text-white w-4 h-4 inline-block cursor-pointer" />
              )}
            </li>
          ))}
        </ul>
      </nav>
      <nav className="flex flex-row items-center space-x-6 self-center absolute right-4">
        <CustomLink
          variant={"logIn"}
          href="/login"
          icon={<SideArrowIcon width={22} height={22} />}
        >
          Log in
        </CustomLink>
        <CustomLink
          href="/try-chatgpt"
          variant={"secondary"}
          icon={<SideArrowIcon width={22} height={22} />}
        >
          <span className="pl-2 whitespace-nowrap">Try ChatGPT</span>
        </CustomLink>
      </nav>
    </header>
  );
};

export default NavbarDesktop;
