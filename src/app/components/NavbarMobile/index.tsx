"use client";

import Link from "next/link";
import SearchIcon from "../Icons/search-icon";
import SideArrowIcon from "../Icons/side-arrow";
import SSTraderNavLogo from "../Icons/sstrader-nav-logo";

import { navbarElements } from "@/app/fixtures/data";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Wrapper } from "../Wrapper";

import dynamic from "next/dynamic";
import useScreenSize from "@/app/hooks/useScreenSize";
import useFooterVisible from "@/app/hooks/useFooterVisible";

import { useScrollContext } from "@/app/hooks/useScrollContext";
import { useState, useRef, useEffect, Fragment } from "react";
import { NavbarProps } from "../types";
import { MinusIcon, PlusIcon } from "lucide-react";
import { CustomLink } from "../CustomLink";

export const DynamicNavbarMobile = dynamic(
  () => import("../NavbarMobile/index"),
  {
    ssr: false,
  }
);

function NavbarMobile() {
  const screenSize = useScreenSize();

  const { isWindowScrolled, isFooterReached } = useScrollContext();

  const [inputOffset, setInputOffset] = useState<number>(0);
  const [isNavbarOpen, setIsNavbarOpen] = useState({
    research: false,
    api: false,
    chatGPT: false,
    company: false,
  });

  const [, setLastClickedItem] = useState<string | null>(null);
  const isFooterVisible = useFooterVisible();

  const wrapperRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const closeDropdown = (item: keyof NavbarProps) => {
    setIsNavbarOpen((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  useEffect(() => {
    const inputElement = inputRef.current;
    const wrapperElement = wrapperRef.current;

    if (inputElement && wrapperElement) {
      const dropdownHeight = wrapperElement.offsetHeight;
      setInputOffset(dropdownHeight);
    }
  }, [isNavbarOpen]);

  if (isFooterVisible) {
    // Return null to hide the navbar if the footer is visible
    return null;
  }

  return (
    <Wrapper
      variant={"mobileLayout"}
      className={`sticky top-0 left-0 h-16 z-50 ${
        isWindowScrolled && !isFooterReached
          ? "bg-black fixed"
          : "bg-transparent sticky"
      }`}
    >
      <Sheet>
        <SheetContent
          side="right"
          className="bg-black border-l-0 w-full overflow-y-scroll"
        >
          {screenSize.width < 640 && (
            <SSTraderNavLogo
              width={164}
              height={100}
              className="absolute left-3 top-3 cursor-pointer h-[100px] text-logoColor"
            />
          )}
          <SheetDescription className="flex flex-col w-full pt-12">
            <ul ref={wrapperRef} className="cursor-pointer">
              {navbarElements.map((element) => (
                <Fragment key={element.id}>
                  <Separator className="h-[1px] my-2" />
                  <li
                    key={element.id}
                    value={element.href}
                    onClick={() =>
                      closeDropdown(element.id as unknown as keyof NavbarProps)
                    }
                    className="relative text-lg font-normal font-sourceSansProFont text-white transition-all duration-300"
                  >
                    {element.name}
                    {isNavbarOpen[
                      element.id as unknown as keyof NavbarProps
                    ] ? (
                      <>
                        <MinusIcon className="text-white w-4 h-4 inline-block cursor-pointer top-[0.4rem] absolute right-1" />
                        <ul>
                          {element.items?.map((item) => (
                            <li
                              key={item.id}
                              className="first:mt-4 last:mb-4 hover:underline text-white text-md font-sourceSansProFont"
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <PlusIcon className="text-white w-4 h-4 inline-block cursor-pointer top-[0.4rem] absolute right-1" />
                    )}
                  </li>
                </Fragment>
              ))}
            </ul>
            <Separator className="h-[1px] my-2" />
            <CustomLink
              variant={"navbarLink"}
              icon={<SideArrowIcon width={24} height={24} />}
              href="/login"
            >
              Log in
            </CustomLink>
            <Separator className="h-[1px] my-2" />
            <CustomLink
              href="/"
              variant={"navbarLink"}
              icon={<SideArrowIcon width={24} height={24} />}
            >
              <span>Try ChatGPT</span>
            </CustomLink>
            <Separator className="h-[1px] my-2" />
            <div
              className="flex flex-row mt-auto absolute left-4 bottom-[3rem] px-2 w-11/12"
              style={{
                transform: `translateY(${inputOffset}px)`,
                paddingBottom: "2rem",
              }}
            >
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search for anything"
                className="right-3 font-sourceSansProFont text-white text-lg bg-black border-[1px] border-white/30 rounded-sm placeholder:text-gray/80 placeholder:text-lg"
              />
              <SearchIcon
                width={18}
                height={18}
                className="text-slate-300 font-sourceSansProFont absolute right-6 transform translate-y-[11px]"
              />
            </div>
          </SheetDescription>
        </SheetContent>
        {screenSize.width < 1280 && (
          <section className="flex flex-row w-full justify-between">
            <SSTraderNavLogo
              width={114}
              height={96}
              href="/"
              className="self-start h-[2.25rem] md:w-[160px] md:h-[60px] cursor-pointer text-logoColor"
            />
            <SheetTrigger className="font-semibold self-start font-sourceSansProFont text-white transition-all duration-300 text-lg hover:underline hover:decoration-1 underline-offset-4">
              Menu
            </SheetTrigger>
          </section>
        )}
      </Sheet>
    </Wrapper>
  );
}

export default NavbarMobile;
