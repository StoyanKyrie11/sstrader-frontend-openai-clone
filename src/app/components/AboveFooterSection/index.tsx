"use client";

import SSTraderNavLogo from "../Icons/sstrader-nav-logo";
import SideArrowIcon from "../Icons/side-arrow";
import { aboveFooterItems } from "@/app/fixtures/aboveFooterContent";

import dynamic from "next/dynamic";
import useScreenSize from "@/app/hooks/useScreenSize";
import SidebarItem from "./SidebarItem";

export const DynamicAboveFooter = dynamic(
  () => import("../AboveFooterSection/index"),
  {
    ssr: false,
  }
);

function AboveFooter() {
  const screenSize = useScreenSize();
  return (
    <div className="bg-black">
      {screenSize.width < 768 && (
        <SSTraderNavLogo
          width={190}
          height={120}
          href="/"
          className="self-start w-[128px] h-[120px] xl:w-[190px] xl:h-[120px] cursor-pointer text-logoColor pl-4 ml-0"
        />
      )}
      <section className="bg-black grid col-span-6 grid-cols-2 gap-10 sm:max-md:gap-12 pt-0 md:pt-6 md:grid-cols-6 pb-12 md:pb-48">
        {screenSize.width > 768 && (
          <SSTraderNavLogo
            width={190}
            height={48}
            href="/"
            className="w-[190px] h-[48px] cursor-pointer text-logoColor pl-2 ml-0 md:col-span-2"
          />
        )}
        {Object.entries(aboveFooterItems).map(([title, items], index) => (
          <SidebarItem
            key={index}
            title={title}
            items={items}
            icon={<SideArrowIcon width={22} height={22} />}
          />
        ))}
      </section>
    </div>
  );
}

export default AboveFooter;
