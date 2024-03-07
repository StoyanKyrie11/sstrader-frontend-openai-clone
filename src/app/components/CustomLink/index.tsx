"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode, forwardRef } from "react";

const linkVariants = cva(
  "text-white font-sourceSansProFont cursor-pointer hover:underline hover:decoration-1 hover:underline-offset-2",
  {
    variants: {
      variant: {
        default: "text-white font-sourceSansProFont",
        primary:
          "text-xl mt-8 flex justify-center flex-row w-[13rem] max-w-[13rem] border px-2 py-[0.2px] rounded-sm border-white hover:bg-white hover:text-black text-nowrap items-center",
        secondary:
          "text-xl mt-0 flex flex-row mx-auto border px-2 py-1 rounded-md border-white hover:bg-white hover:text-black text-nowrap items-center hover:no-underline",
        tertriary:
          "w-full max-w-auto max-w-auto border border-white rounded-md p-6 text-center hover:bg-white hover:text-black transition-all duration-300 font-semibold text-xl underline-offset-4",
        rimless: "border-none hover:underline-none text-md md:text-xl",
        bodyItem:
          "self-start cursor-pointer text-lg underline underline-offset-4 hover:no-underline",
        blogCTA:
          "text-xl mt-8 flex justify-center flex-row max-w-[10rem] border px-2 py-[0.2px] rounded-sm border-white hover:bg-white hover:text-black text-nowrap items-center hover:no-underline w-auto h-auto",
        logIn:
          "items-center flex flex-row text-white text-lg font-sourceSansProFont w-full cursor-pointer hover:underline hover:decoration-1 underline-offset-4",
        logo: "cursor-pointer md:w-[140px] md:h-[60px] xl:w-[164px] xl:h-[56px] text-logoColor xl:mt-2",
        reusableImage:
          "text-white font-semibold font-sourceSansProFont font-md  md:text-xl hover:underline hover:decoration-1 underline-offset-2 line-clamp-2",
        reusableLinkImage: "w-auto cursor-pointer",
        navbarLink:
          "items-center inline-block flex flex-row text-white text-lg justify-between font-sourceSansProFont w-full cursor-pointer hover:underline hover:decoration-[0.15px] underline-offset-4",
        safetyAuthorLink:
          "flex flex-row font-normal font-sourceSansProFont text-xl self-start text-black underline decoration-1 underline-offset-4 cursor-pointer hover:decoration-black/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CustomLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href?: string;
  icon?: ReactNode;
}

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ className, children, variant, href, icon, ...props }, ref) => {
    return (
      <a
        className={cn(linkVariants({ className, variant, ...props }))}
        href={href}
        ref={ref}
        {...props}
      >
        {children}
        {icon && <span className="self-center">{icon}</span>}
      </a>
    );
  }
);

CustomLink.displayName = "CustomLink";

export { CustomLink };
