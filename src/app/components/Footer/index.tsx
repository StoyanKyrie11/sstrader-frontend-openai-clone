"use client";

import dynamic from "next/dynamic";
import useScreenSize from "@/app/hooks/useScreenSize";

import { ArrowUp } from "lucide-react";
import { CustomLink } from "../CustomLink";
import { socialMedias } from "@/app/fixtures/socialMedias";
import { Wrapper } from "../Wrapper";

export const DynamicFooter = dynamic(() => import("../Footer"), {
  ssr: false,
});

function Footer() {
  const screenSize = useScreenSize();
  const handleNavigateToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Wrapper id="footer" variant={"footerLayout"}>
      <div className="flex flex-col w-full space-y-24 md:w-[50%] h-auto text-start px-4">
        <div className="flex flex-col">
          <span className="font-bold text-lg md:text-xl">
            OpenAI © 2015 – 2024
          </span>
          <CustomLink
            variant={"rimless"}
            href="/terms_policies"
            className="text-md"
          >
            Terms & policies
          </CustomLink>
          <CustomLink
            variant={"rimless"}
            href="/privacy_policy"
            className="text-md"
          >
            Privacy policy
          </CustomLink>
          <CustomLink
            variant={"rimless"}
            href="/brand_guidelines"
            className="text-md"
          >
            Brand guidelines
          </CustomLink>
        </div>
        <>
          {screenSize.width < 768 && (
            <CustomLink
              href="/"
              variant={"rimless"}
              onClick={handleNavigateToTop}
              icon={<ArrowUp className="w-5 h-5 inline-block" />}
              className="text-lg md:text-xl self-start justify-end"
            >
              Back to top
            </CustomLink>
          )}
        </>
      </div>
      <div className="flex flex-col space-y-12 md:space-y-20">
        <ul className="flex flex-col md:flex-row md:space-x-4 justify-center items-start md:items-center self-start w-auto h-auto">
          {screenSize.width < 768 && (
            <span className="text-lg md:text-xl font-semibold">Social</span>
          )}
          {socialMedias.map((socialMedia) => (
            <li key={socialMedia.id}>
              <CustomLink variant={"rimless"} href={socialMedia.url}>
                {socialMedia.name}
              </CustomLink>
            </li>
          ))}
        </ul>
        {screenSize.width > 768 && (
          <CustomLink
            href="/"
            variant={"rimless"}
            onClick={handleNavigateToTop}
            className="self-start justify-end"
          >
            Back to top
            <ArrowUp className="w-5 h-5 inline-block" />
          </CustomLink>
        )}
      </div>
    </Wrapper>
  );
}

export default Footer;
