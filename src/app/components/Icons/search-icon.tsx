import { memo } from "react";

function IconSVG(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="a-icon--search400 a-icon--text"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M14.49 13.51L10.98 10A4.98 4.98 0 007 2a5 5 0 103 8.98l3.51 3.51.98-.98zM3.38 7a3.62 3.62 0 117.24 0 3.62 3.62 0 01-7.24 0z"
      ></path>
    </svg>
  );
}

const SearchIcon = memo(IconSVG);

export default SearchIcon;
