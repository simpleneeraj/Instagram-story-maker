import React, { useCallback, useState } from "react";
import domtoimage from "../Constent/domtoimage";

const useDomtoImage = (imageScale, imageName) => {
  //----------------------------------//
  //Here Dom-to-Image handler
  //----------------------------------//
  const [isDownloading, setisDownloading] = useState(false);

  const DOM_TO_IMAGE_HANDLER = async (node) => {
    const element = document.createElement("a");
    setisDownloading(true);
    //----------------------------------//
    // Height Width and Scale To HD
    //----------------------------------//
    const options = {
      style: {
        transform: `scale(${imageScale}) translate(${
          (node.offsetWidth * (imageScale - 1)) / 2 / imageScale
        }px,${(node.offsetHeight * (imageScale - 1)) / 2 / imageScale}px)`,
      },
      height: node.offsetHeight * imageScale,
      width: node.offsetWidth * imageScale,
    };

    //----------------------------------//
    //I use here Try Catch Method
    //----------------------------------//

    try {
      const format = await domtoimage.toBlob(node, options);
      const imageURL = URL.createObjectURL(format);
      element.download = imageName || `Image.png`;
      element.href = imageURL;
      document.body.appendChild(element);
      element.click();
      element.remove();
      setisDownloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //-------------------------------------//
  //Here Simple handler for download image
  //-------------------------------------//

  const Handler_Download_Image = useCallback(() => {
    const node = document.getElementById("TemplatesImage");
    DOM_TO_IMAGE_HANDLER(node);
  }, []);

  //----------------------------------//
  //Return All handlers
  //----------------------------------//
  return { Handler_Download_Image, isDownloading };
};

export default useDomtoImage;
