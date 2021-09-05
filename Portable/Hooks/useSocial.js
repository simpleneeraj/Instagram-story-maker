import { useCallback } from "react";

const useSocial = (Data) => {
  //----------------------------------//
  // Here Network URLs %0A for Line Break
  //----------------------------------//
  const tweetURL = `https://twitter.com/intent/tweet?text=${Data}`;
  const whatsappURL = `https://wa.me/?text=${Data} `;

  //----------------------------------//
  // Simple Handlers
  //----------------------------------//

  const social_Handler = (shareURL) => {
    try {
      const link = document.createElement("a");
      link.href = shareURL;
      link.target = "_blank";
      link.click();
      link.remove();
    } catch (error) {
      console.log(error);
    }
  };
  //----------------------------------//
  // Share on Whatsapp Handler
  //----------------------------------//

  const whatsappHandler = useCallback(
    () => social_Handler(whatsappURL),
    [Data]
  );
  //----------------------------------//
  // Share on Twitter Handler
  //----------------------------------//

  const twitterHandler = useCallback(() => social_Handler(tweetURL), [Data]);

  return { whatsappHandler, twitterHandler };
};

export default useSocial;
