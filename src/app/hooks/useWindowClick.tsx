import { Dispatch, useEffect, useRef } from "react";

export const useWindowClick = (
  showDropDown: boolean,
  setShowDropDown: Dispatch<boolean>,
  screenSize: number
) => {
  //  // You need a ref to an HTML element here
  const dropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Event listener on open
    if (!showDropDown) return;

    function handleClick(event: MouseEvent) {
      if (
        dropdown.current &&
        !dropdown.current.contains(event.target as HTMLElement) &&
        screenSize < 1024
      ) {
        setShowDropDown(false);
      }
    }
    window.addEventListener("click", handleClick);
    // Clear up before unmounting
    return () => window.removeEventListener("click", handleClick);
  }, [screenSize, setShowDropDown, showDropDown]);

  return dropdown;
};
