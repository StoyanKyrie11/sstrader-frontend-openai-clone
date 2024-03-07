import BodyOverlay from "./components/BodyOverlay";
import BodyContent from "./components/BodyContent";
import Image from "next/image";
import Link from "next/link";
import LatestUpdatesSection from "./components/LatestUpdates";
import ReusableImage from "./components/ReusableImage";

import graphQLReq from "@/lib/posts";

import { DynamicHeaderComponent } from "./components/Header";
import { Wrapper } from "./components/Wrapper";
import { researchImgsContent } from "./fixtures/researchContent";
import { productsImgContents } from "./fixtures/productsContent";
import { CustomLink } from "./components/CustomLink";
import { DynamicQuotesComponent } from "./components/QuotesComponent";
import { DynamicFooter } from "./components/Footer";
import { DynamicAboveFooter } from "./components/AboveFooterSection";
import { BlogPostProps } from "./types";
import { blogQuery } from "./queries";
import { Separator } from "./components/Separator";

export default async function Home() {
  const data = await graphQLReq({ query: blogQuery });
  const { allBlogposts } = data || {};
  // const {
  //   content,
  //   publishDate,
  //   title,
  //   authors: { name },
  // }: BlogPostProps = allBlogposts[3] || {};

  // Object.values(allBlogposts).map((blogpost: any) => {
  //   console.log(typeof blogpost);
  // });

  // console.log(content);
  // console.log(publishDate);
  // console.log(title);
  // console.log(name);

  return (
    <>
      <Wrapper variant={"headerLayout"}>
        <DynamicHeaderComponent />
        <BodyOverlay />
      </Wrapper>
      <Wrapper variant={"bodyLayout"}>
        <BodyContent />
      </Wrapper>
      <Separator />
      <section className="bg-black flex flex-col md:flex-row items-start md:items-center md:justify-between md:pr-6 pb-12">
        <h1 className=" text-3xl sm:text-4xl font-sourceSansProFont font-normal text-white px-4 pt-1">
          Latest updates
        </h1>
        <Link
          href="/view-all-updates"
          className="pl-4 font-sourceSansProFont text-xl text-white underline decoration-1 underline-offset-4 cursor-pointer transition-all duration-300 hover:decoration-white/40"
        >
          View all updates
        </Link>
      </section>
      <div className="bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-3 lg:grid-cols-4 pb-24 px-[0.8rem] pr-[0.8rem]">
        {allBlogposts.map((blogpost: Record<string, any>, index: number) => {
          const {
            content,
            publishDate,
            title,
            authors: { name: authorName },
            image: { url: imgSrc },
            description: imgDescription,
            blogSlug: slug,
          } = blogpost as BlogPostProps;

          return (
            <LatestUpdatesSection
              key={index}
              imgSrc={imgSrc}
              slug={slug}
              text={imgDescription}
            />
          );
        })}
      </div>
      <Separator />
      <div className="bg-black grid grid-cols-1 sm:grid-cols-2 items-center justify-between pr-4 pb-24">
        <h1 className="text-2xl md:text-heading-3 font-sourceSansProFont self-start font-normal text-white px-4 md:px-4 pt-1">
          Safety & responsibility
        </h1>
        <section className="flex flex-col space-y-6 items-end px-4 md:px-0">
          <div className="font-sourceSansProFont text-2xl md:text-3xl text-white w-auto max-w-auto pt-4 md:pt-0">
            Our work to create safe and beneficial AI requires a deep
            understanding of the potential risks and benefits, as well as
            careful consideration of the impact.
          </div>
          <Link
            href="/safety"
            className="font-sourceSansProFont text-xl self-start text-white underline decoration-1 underline-offset-4 cursor-pointer transition-all duration-300 hover:decoration-white/40"
          >
            Learn about safety
          </Link>
        </section>
      </div>
      <Image
        src="/assets/img/image_five_bg.webp"
        width={3840}
        height={2880}
        priority
        quality={100}
        alt="Image five"
        className="bg-black object-cover lg: pb-24"
      />
      <Separator />
      <div className="bg-black grid grid-cols-1 sm:grid-cols-2 items-center justify-between pb-12 md:pb-24">
        <h1 className=" text-2xl md:text-heading-1 font-sourceSansProFont self-start font-normal text-white px-4 md:px-4 pt-1">
          Research
        </h1>
        <section className="flex flex-col space-y-6 items-end px-4 md:px-0">
          <div className="font-sourceSansProFont text-3xl text-white w-auto max-w-auto pt-4 md:pt-0">
            We research generative models and how to align them with human
            values.
          </div>
          <Link
            href="/safety"
            className="font-sourceSansProFont text-xl self-start text-white underline decoration-1 underline-offset-4 cursor-pointer transition-all duration-300 hover:decoration-white/40"
          >
            Learn about our research
          </Link>
        </section>
      </div>
      <div className="bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-3 lg:grid-cols-4 pb-24 px-[0.8rem] pr-[0.8rem]">
        {researchImgsContent.map((image) => (
          <ReusableImage key={image.id} imgSrc={image.src} text={image.text} />
        ))}
      </div>
      <Separator />
      <div className="bg-black grid grid-cols-1 sm:grid-cols-2 items-center justify-between pb-12 md:pb-24">
        <h1 className="text-2xl md:text-heading-1 font-sourceSansProFont self-start font-normal text-white px-4 md:px-4 pt-1">
          Products
        </h1>
        <section className="flex flex-col space-y-6 items-end pl-4 md:px-0">
          <div className="font-sourceSansProFont text-2xl md:text-3xl text-white w-auto max-w-auto pt-4 md:pt-0 md:leading-6">
            Our API platform offers our latest models and guides for safety best
            practices.
          </div>
          <Link
            href="/products"
            className="font-sourceSansProFont text-xl self-start text-white underline decoration-1 underline-offset-4 cursor-pointer transition-all duration-300 hover:decoration-white/40"
          >
            Explore our products
          </Link>
        </section>
      </div>
      <div className="bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-3 lg:grid-cols-4 pb-24 px-[0.8rem] pr-[0.8rem]">
        {productsImgContents.map((image) => (
          <ReusableImage key={image.id} imgSrc={image.src} text={image.text} />
        ))}
      </div>
      <Separator />
      <div className="bg-black grid grid-cols-1 sm:grid-cols-2 items-center justify-between pr-4 md:pr-0 pb-12 md:pb-24">
        <h1 className="text-2xl md:text-heading-1 font-sourceSansProFont self-start font-normal text-white px-4 md:px-4">
          Careers at OpenAI
        </h1>
        <section className="flex flex-col space-y-6 items-end pt-4 md:pt-0 pl-4 md:px-6">
          <div className="font-sourceSansProFont text-2xl md:text-3xl text-white w-auto max-w-auto">
            Developing safe and beneficial AI requires people from a wide range
            of disciplines and backgrounds.
          </div>
          <Link
            href="/products"
            className="font-sourceSansProFont text-xl self-start text-white underline decoration-1 underline-offset-4 cursor-pointer transition-all duration-300 hover:decoration-white/40"
          >
            View careers
          </Link>
        </section>
      </div>
      <Image
        src="/assets/img/image_bg_thirteen.avif"
        width={3840}
        height={2880}
        priority
        quality={100}
        alt="Office space talking about AI"
        className="bg-black object-cover lg: pb-24"
      />
      <Separator />
      <DynamicQuotesComponent />
      <div className="bg-black flex flex-row place-content-center">
        <div className="flex flex-row bg-black w-[98%] max-w-auto h-full border-t border-white my-4"></div>
      </div>
      <section className="flex flex-col space-y-20 bg-black px-4 pb-12 md:pb-32">
        <h1 className="font-sourceSansProFont text-white text-3xl md:text-4xl">
          Join us in shaping the future of technology.
        </h1>
        <CustomLink
          href="/careers"
          variant={"tertriary"}
          className="hover:no-underline text-lg sm:text-xl md:text-2xl"
        >
          View careers
        </CustomLink>
      </section>
      <DynamicAboveFooter />
      <div className="bg-black flex flex-row place-content-center">
        <div className="flex flex-row bg-black w-[98%] max-w-auto h-full border-t border-white my-4"></div>
      </div>
      <DynamicFooter />
    </>
  );
}
