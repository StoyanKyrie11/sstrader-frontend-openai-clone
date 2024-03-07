"use client";

import { useContext } from "react";
import { ScrollContext, ScrollContextType } from "../context/scrollContext";

export const useScrollContext = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};

export default ScrollContext;
