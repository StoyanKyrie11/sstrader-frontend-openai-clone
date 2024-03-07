import { CustomLink } from "../CustomLink";
import { Wrapper } from "../Wrapper";

function BodyOverlay() {
  return (
    <Wrapper variant={"heroLayout"}>
      <h1 className="text-white font-sourceSansProFont text-4xl md:text-5xl md:leading-[4rem] w-11/12 md:w-full z-0">
        Creating safe AGI that benefits all of humanity
      </h1>
      <CustomLink
        variant={"primary"}
        href="/learn-about"
        className="hover:no-underline xs:whitespace-nowrap"
      >
        Learn more about Sora
      </CustomLink>
    </Wrapper>
  );
}

export default BodyOverlay;
