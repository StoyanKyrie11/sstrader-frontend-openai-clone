"use client";

import BackgroundImage from "../BackgroundVideo";
import NavbarDesktop from "../NavbarDesktop";

import dynamic from "next/dynamic";
import useScreenSize from "@/app/hooks/useScreenSize";

import { DynamicNavbarMobile } from "../NavbarMobile";

export const DynamicHeaderComponent = dynamic(() => import("../Header/index"), {
  ssr: false,
});

function Header() {
  const screenSize = useScreenSize();

  return (
    <>
      <BackgroundImage />
      <section className="flex flex-col items-center w-full h-full">
        {screenSize.width < 1280 ? <DynamicNavbarMobile /> : <NavbarDesktop />}
      </section>
    </>
  );
}

export default Header;
