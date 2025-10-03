import React from 'react'

export const Breakpoints = {
    lg: 1200,
    md: 940,
    sm: 768,
};

/**
 * Returns 'true', if it's from mobile (viewport max-width: 940px)
 */
export const useIsMobile = () => {
  const [width, setWidth] = React.useState(window.innerWidth)
  const breakpoint = Breakpoints.md;

  React.useEffect(() => {
    let handler = () => {};
      handler = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handler)
  }, [])

  return width <= breakpoint
}
