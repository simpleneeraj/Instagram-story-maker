import { useCallback } from "react";

const useShare = (Data) => {
  //--------------------------------------------------------//
  // When Handler Clicked a Share Model Open in Mobile Phones
  //--------------------------------------------------------//

  const shareHandler = useCallback(async () => {
    try {
      await navigator.share({
        title: `Explore new things only on ${window.location.href}`,
        url: `${window.location.href}`,
        text: Data,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { shareHandler };
};

export default useShare;
