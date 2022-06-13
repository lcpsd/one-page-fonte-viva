import { useEffect, useState } from "react";

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const media = window.matchMedia(query)
      if (media.matches !== matches) {
        setMatches(media.matches)
      }
      const listener = () => {
        setMatches(media.matches)
      }
      media.addListener(listener)
      return () => media.removeListener(listener)
    }, [matches, query])
  
    return matches
}

export const useIsBase = () => useMediaQuery('(min-width: 0px)')
export const useIsMedium = () => useMediaQuery('(min-width: 425px)')
export const useIsLarge = () => useMediaQuery('(min-width: 768px)')
export const useIsXlarge = () => useMediaQuery('(min-width: 1024px)')
