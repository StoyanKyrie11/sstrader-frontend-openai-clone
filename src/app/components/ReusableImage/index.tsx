import Image from "next/image";

import { CustomLink } from "../CustomLink";
import { Wrapper } from "../Wrapper";

import dateFormating from "@/lib/dateFormating";

type ReusableImageProps = {
  imgSrc: string | null;
  text: string | null;
  href?: string;
};

function ReusableImage({ imgSrc, text, href }: ReusableImageProps) {
  return (
    <>
      <Wrapper variant={"reusableImageLayout"}>
        <CustomLink
          href="/"
          icon={
            <Image
              src={`${imgSrc}`}
              width={400}
              height={400}
              alt="Image one"
              className="w-auto cursor-pointer"
            />
          }
        />
        <CustomLink href="/" variant={"reusableImage"}>
          {text}
        </CustomLink>
        <span className="text-white font-sourceSansProFont md:font-medium md:text-xl mb-8">
          {dateFormating()}
        </span>
      </Wrapper>
    </>
  );
}

export default ReusableImage;
