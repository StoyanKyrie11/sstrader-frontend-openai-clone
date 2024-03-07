import Image from "next/image";
import Loading from "./loading";
import SideArrowIcon from "@/app/components/Icons/side-arrow";

import blogDateFormatHandler from "@/lib/blogDateFormatHandler";
import graphQLReq from "@/lib/posts";

import { BlogPostProps } from "../../types";
import { DynamicBlogHeader } from "./components/BlogHeader";
import { Suspense } from "react";
import { ScrollProvider } from "@/app/context/scrollContext";
import { CustomLink } from "@/app/components/CustomLink";
import { pageBlogQuery } from "@/app/queries";
import { Separator } from "@/app/components/Separator";
import { ArrowDown } from "lucide-react";

export default async function BlogPost({
  params,
}: {
  params: { blogSlug: string };
}) {
  console.log(params.blogSlug);
  const data = await graphQLReq({
    query: pageBlogQuery,
    variables: { blogSlug: params.blogSlug },
  });
  const { blogpost } = data || {};
  const {
    content,
    publishDate,
    title,
    authors: { name: authorName },
    image: { url },
    description,
  }: BlogPostProps = blogpost || {};

  return (
    <ScrollProvider>
      <Suspense fallback={<Loading />}>
        <section className="bg-black text-white min-h-screen mx-auto px-6">
          <DynamicBlogHeader />
          <section className="bg-black text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 pt-24 gap-4 md:gap-32 lg:gap-56 md:pt-40 mb-6 md:mb-20">
              <div className="flex flex-col">
                <CustomLink
                  variant={"navbarLink"}
                  href="/blog"
                  className="text-xl"
                >
                  Blog
                </CustomLink>
                <div className="text-heading-2 self-start md:text-heading-3 leading-none font-medium">
                  {title}
                </div>
              </div>
              <div className="flex flex-col md:pt-8 space-y-6">
                <div className="text-xl md:text-2xl font-medium">
                  {description}
                </div>
                <CustomLink
                  href="/try-chatgpt"
                  variant={"blogCTA"}
                  icon={<SideArrowIcon width={22} height={22} />}
                >
                  <span className="pl-2 font-medium">Explore GPTs</span>
                </CustomLink>
              </div>
            </div>
            <Image
              src={url}
              alt={`${url}`}
              width={2190}
              height={1235}
              className="rounded-sm pb-12"
            />
          </section>

          <section className="absolute left-0 bg-white h-full text-black pt-6 md:pt-12 px-6">
            <Separator variant={"secondary"} />
            <div className="grid grid-cols-1 md:grid-cols-2">
              <section className="grid grid-cols-2">
                <div className="font-medium text-lg">
                  {blogDateFormatHandler(publishDate)}
                </div>
                <section className="flex flex-col space-y-2 ">
                  <span className="font-semibold text-lg">Authors</span>
                  <CustomLink
                    href="/"
                    variant={"safetyAuthorLink"}
                    icon={<ArrowDown size={16} />}
                  >
                    {authorName}
                  </CustomLink>
                </section>
              </section>
              <div>{content}</div>
            </div>
          </section>
        </section>
      </Suspense>
    </ScrollProvider>
  );
}
