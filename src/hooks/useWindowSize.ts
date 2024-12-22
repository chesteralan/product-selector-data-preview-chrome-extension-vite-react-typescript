import React from "react";

export const useWindowSize = () => {
  const windowSize = React.useMemo(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 768,
    };
  }, []);

  return windowSize;
};
