import { useCallback, useState } from "react";

const useClipboard = (Data) => {
  //----------------------------------//
  //Copy Text Handler
  //----------------------------------//
  const [isCopeid, setisCopeid] = useState(false);
  const copyTextHandler = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(Data);
      setisCopeid(true);
      setTimeout(() => {
        setisCopeid(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }, []);
  //----------------------------------//
  //Return These Value
  //----------------------------------//
  return { copyTextHandler, isCopeid };
};

export default useClipboard;

export const useCopeidLink = () => {
  //------------------------------------//
  // Copy Current Path Link using handler
  //------------------------------------//
  const [isCopeidLink, setisCopeidLink] = useState(false);
  const copyLinkHandler = useCallback(async () => {
    setisCopeidLink(true);
    try {
      let link = document.location.href;
      await navigator.clipboard.writeText(link);
      setTimeout(() => {
        setisCopeidLink(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }, []);

  //----------------------------------//
  //Return These Value
  //----------------------------------//
  return { copyLinkHandler, isCopeidLink };
};
