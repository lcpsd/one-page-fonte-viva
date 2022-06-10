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

export const useIsSmall = () => useMediaQuery('(max-width: 480px)')
export const useIsMedium = () => useMediaQuery('(max-width: 768px)')
export const useIsLarge = () => useMediaQuery('(max-width: 900px)')
export const useIsXlarge = () => useMediaQuery('(min-width: 900px)')
