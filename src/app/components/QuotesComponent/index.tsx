"use client";

import BlockquoteItem from "./BlockquoteItem";
import Image from "next/image";
import { Wrapper } from "../Wrapper";

import useScreenSize from "@/app/hooks/useScreenSize";
import dynamic from "next/dynamic";

export const DynamicQuotesComponent = dynamic(
  () => import("../QuotesComponent/index"),
  {
    ssr: false,
  }
);

function QuotesComponent() {
  const screenSize = useScreenSize();
  return (
    <Wrapper variant={"quotesComponentLayout"}>
      {screenSize.width <= 744 && (
        <Image
          width={790}
          height={790}
          src="/assets/img/image_portrait_alex_w.webp"
          alt="Alex Weng Portrait"
          priority
          quality={95}
          className="w-auto h-auto px-4 md:px-6"
        />
      )}
      <section className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-10">
        <BlockquoteItem
          content={` I encourage my team to keep learning. Ideas in different topics or
            fields can often inspire new ideas and broaden the potential
            solution space.`}
          title={"Lilian Weng"}
          author={"Applied AI at OpenAI"}
        />
        {screenSize.width > 745 && (
          <Image
            width={790}
            height={790}
            src="/assets/img/image_portrait_alex_w.webp"
            alt="Alex Weng Portrait"
            priority
            quality={100}
            className="w-auto h-auto"
          />
        )}
      </section>
    </Wrapper>
  );
}

export default QuotesComponent;
