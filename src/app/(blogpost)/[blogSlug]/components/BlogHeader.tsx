"use client";

import NavbarDesktop from "@/app/components/NavbarDesktop";

import useScreenSize from "@/app/hooks/useScreenSize";
import dynamic from "next/dynamic";

import { DynamicNavbarMobile } from "@/app/components/NavbarMobile";

export const DynamicBlogHeader = dynamic(() => import("./BlogHeader"), {
  ssr: false,
});

function BlogHeader() {
  const screenSize = useScreenSize();
  return (
    <section className="flex flex-col items-center w-full h-full">
      {screenSize.width < 1280 ? <DynamicNavbarMobile /> : <NavbarDesktop />}
    </section>
  );
}

export default BlogHeader;
