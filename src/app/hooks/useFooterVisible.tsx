import { useEffect, useState } from "react";

const useFooterVisible = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        const footerPosition = footerElement.getBoundingClientRect();
        setIsFooterVisible(footerPosition.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return isFooterVisible;
};

export default useFooterVisible;
