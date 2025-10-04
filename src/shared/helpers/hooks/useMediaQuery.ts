import { useCallback, useEffect, useState } from "react";

enum DefaultSizeMap {
  laptop = "1440px",
  tablet = "1200px",
  mobile = "743px",
}

export function useMediaQuery() {
  const [breakPoint, setBreakPoint] = useState<ReturnType<typeof getBreakPoint>>(
    undefined
  );
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const resizeCallback = useCallback(() => {
    if (typeof window === "undefined") return;
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setBreakPoint(getBreakPoint());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    resizeCallback();
    window.addEventListener("resize", resizeCallback);
    return () => {
      window.removeEventListener("resize", resizeCallback);
    };
  }, [resizeCallback]);

// @ts-expect-error: key might not exist in DefaultSizeMap
  const breakpointSize = breakPoint ? DefaultSizeMap[breakPoint] : undefined;
  const breakpointValue = breakpointSize
    ? parseInt(breakpointSize)
    : undefined;

  return {
    breakPoint,
    breakpointValue,
    breakpointSize,
    width,
    height,
  };
}

export const getBreakPoint = () => {
  if (typeof window === "undefined") return undefined;

  if (window.matchMedia("(max-width: 743px)").matches) {
    return "mobile";
  }

  if (
    window.matchMedia("(max-width: 1199px)").matches ||
    window.matchMedia("(max-height: 789px)").matches
  ) {
    return "tablet";
  }

  if (
    window.matchMedia("(max-width: 1440px)").matches ||
    window.matchMedia("(max-height: 959px)").matches
  ) {
    return "laptop";
  }

  if (
    window.matchMedia("(min-width: 1441px) and (min-height: 960px)").matches
  ) {
    return "desktop";
  }
};
