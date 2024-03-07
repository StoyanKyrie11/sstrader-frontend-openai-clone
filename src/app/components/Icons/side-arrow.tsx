import { memo } from "react";

function IconSVG(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 16 20"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 4.31v1.38h4.33l-6.82 6.82.98.98 6.82-6.82V11h1.38V4.31H5z"
      ></path>
    </svg>
  );
}

const SideArrowIcon = memo(IconSVG);

export default SideArrowIcon;
