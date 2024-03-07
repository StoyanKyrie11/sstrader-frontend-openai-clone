"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type ScrollContextType = {
  isWindowScrolled: boolean;
  isFooterReached: boolean;
};

export const ScrollContext = createContext<ScrollContextType | undefined>(
  undefined
);

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isWindowScrolled, setIsWindowScrolled] = useState<boolean>(false);
  const [isFooterReached, setIsFooterReached] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      setIsWindowScrolled(window.scrollY > 100);

      // Calculate whether footer section is reached
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        const footerPosition =
          footerElement.getBoundingClientRect().top + window.scrollY;
        setIsFooterReached(window.scrollY >= footerPosition);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ isWindowScrolled, isFooterReached }}>
      {children}
    </ScrollContext.Provider>
  );
};
