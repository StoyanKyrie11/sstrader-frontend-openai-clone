"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const navbarWrapperVairants = cva("font-sourceSansProFont", {
  variants: {
    variant: {
      default: "text-white",
      latestUpdatesWrapper: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface NavbarWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarWrapperVairants> {}

export interface NavbarWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarWrapperVairants> {}

const Wrapper = forwardRef<HTMLDivElement, NavbarWrapperProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <header
        className={cn(navbarWrapperVairants({ className, variant, ...props }))}
        ref={ref}
        {...props}
      >
        {children}
      </header>
    );
  }
);

Wrapper.displayName = "NavbarWrapper";

export { Wrapper };
