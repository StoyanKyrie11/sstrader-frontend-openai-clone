import Image from "next/image";

import dateFormating from "@/lib/dateFormating";

import { CustomLink } from "../CustomLink";
import { Wrapper } from "../Wrapper";

type LatestUpdatesSectionProps = {
  imgSrc: string | null;
  text: string | null;
  slug?: string;
};

function LatestUpdatesSection({
  imgSrc,
  text,
  slug,
}: LatestUpdatesSectionProps) {
  return (
    <>
      <Wrapper variant={"reusableImageLayout"}>
        <CustomLink
          href={`/${slug}`}
          icon={
            <Image
              src={`${imgSrc}`}
              width={800}
              height={800}
              quality={90}
              alt={`Image ${text}`}
              className="w-auto h-auto cursor-pointer"
            />
          }
        />
        <CustomLink href={`/${slug}`} variant={"reusableImage"}>
          {text}
        </CustomLink>
        <span className="text-white font-sourceSansProFont md:font-medium md:text-xl mb-8">
          {dateFormating()}
        </span>
      </Wrapper>
    </>
  );
}

export default LatestUpdatesSection;
