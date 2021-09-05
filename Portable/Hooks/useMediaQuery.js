import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [mathes, setmathes] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== mathes) {
      setmathes(media.matches);
    }
    const listener = () => {
      setmathes(media.matches);
    };
    window.addEventListener("resize", listener, true);
    return () => {
      window.removeEventListener("resize", listener, true);
    };
  }, [mathes, query]);
  return mathes;
};

export default useMediaQuery;
