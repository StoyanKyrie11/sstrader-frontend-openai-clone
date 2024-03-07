"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const separatorVariants = cva("flex flex-row place-content-center", {
  variants: {
    variant: {
      primary: "bg-black",
      secondary: "bg-white pt-8",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const innerSeparatorVariants = cva(
  "flex flex-row w-full h-full border-t my-2",
  {
    variants: {
      variant: {
        primary: "bg-black border-white",
        secondary: "bg-white border-black",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {}

const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <div
        className={cn(separatorVariants({ className, variant, ...props }))}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            innerSeparatorVariants({ className, variant, ...props })
          )}
          {...props}
        />
      </div>
    );
  }
);

Separator.displayName = "Separator";

export { Separator };
