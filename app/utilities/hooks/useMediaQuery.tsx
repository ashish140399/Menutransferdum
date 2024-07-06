import { useEffect, useState } from "react";

export const useClientMediaQuery = (query: string) => {
  const initialValue =
    typeof window !== "undefined" ? window.matchMedia(query).matches : false;
  const [matches, setMatches] = useState(initialValue);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    const handleChange = () => setMatches(window.matchMedia(query).matches);
    handleChange();

    // Add event listener (and add backwards compatibility for Safari)
    if (matchMedia.addListener) matchMedia.addListener(handleChange);
    else matchMedia.addEventListener("change", handleChange);

    return () => {
      if (matchMedia.removeListener) matchMedia.removeListener(handleChange);
      else matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};
