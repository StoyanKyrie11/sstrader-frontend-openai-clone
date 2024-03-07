"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const wrapperVariants = cva("font-sourceSansProFont", {
  variants: {
    variant: {
      default: "text-white",
      headerLayout:
        "flex flex-col items-center justify-between h-screen min-h-screen",
      bodyLayout:
        "grid grid-cols-1 md:items-normal gap-4 sm:grid-cols-2 place-items-start md:place-items-baseline md:grid-cols-3 w-full text-center py-12 text-white font-sourceSansProFont bg-black",
      mobileLayout: "w-full px-4 py-4 text-end md:py-4 sticky z-90",
      aboveFooterLayout:
        "flex flex-col px-4 md:px-0 font-sourceSansProFont text-white text-lg font-semibold",
      footerLayout:
        "bg-black border-none font-sourceSansProFont text-white grid grid-cols-2 space-x-6 sm:grid-cols-2 md:grid-cols-3 md:space-x-6 pb-12 md:pb-32 gap-[1.75rem]",
      heroLayout:
        "flex flex-col absolute bottom-[15%] px-8 w-auto left-[1rem] md:left-[15%] max-w-auto md:max-w-[75%] z-0",
      reusableImageLayout:
        "flex flex-col md:space-y-2 px-[0.3rem] md:px-[0.4rem] lg:px-[0.5rem] w-full",
      quotesComponentLayout:
        "bg-black flex flex-col md:flex-row text-white w-full space-y-4 pt-4 pb-12 md:pb-48",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface WrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof wrapperVariants> {}

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <div
        className={cn(wrapperVariants({ className, variant, ...props }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Wrapper.displayName = "Wrapper";

export { Wrapper };
