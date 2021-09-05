import React, { useRef } from "react";
import {
  Check_Icon,
  File_Text_Icon,
  Twitter_Icon,
  Whatsapp_Icon,
} from "../Constent/Icons";
import { Random } from "../Constent/Random";
import { useClickOutside } from "../Hooks/useClick";
import useClipboard from "../Hooks/useClipboard";
import useDomtoImage from "../Hooks/useDomtoImage";
import usePortable from "../Hooks/usePortable";
import useSocial from "../Hooks/useSocial";
import css from "../styles/Model.module.scss";
const Model = () => {
  //----------------------------------//
  // Icon Color And Size
  //----------------------------------//
  const Color = "#444";
  const Size = "25px";
  //----------------------------------//
  // Redux Store Value
  //----------------------------------//
  const {
    background,
    thought,
    imagescale,
    imagescaleHandler,
    modelDownloadHandler,
    modelDownload,
  } = usePortable();
  //----------------------------------//
  // Destructring Values
  //----------------------------------//
  const { content, author } = thought;
  const Data = `${content}%0A-${author}`;
  //----------------------------------//
  // Copy Text Handler
  //----------------------------------//
  const { copyTextHandler, isCopeid } = useClipboard(`${content}-${author}`);
  //----------------------------------//
  // Dom To Image Handler
  //----------------------------------//
  const Rename = `${author}-${Random()}`;
  const { Handler_Download_Image, isDownloading } = useDomtoImage(
    imagescale,
    Rename
  );
  //----------------------------------//
  // Share on Social Media
  //----------------------------------//
  const { twitterHandler, whatsappHandler } = useSocial(Data);
  //----------------------------------//
  // I use Click Outside For model Close
  //----------------------------------//
  const ref = useClickOutside(() => modelDownloadHandler(false));
  return (
    <div className={`${css.Model} `}>
      <div ref={ref} className={`${css.ModelItem} `}>
        <p>Choose image Size : {imageScaleData[imagescale - 1].Title}</p>
        <div className={css.Scale}>
          {imageScaleData.map((data, index) => {
            return (
              <button
                onClick={() => imagescaleHandler(data.value)}
                id={imagescale === data.value ? css.Active : null}
                key={index}
              >
                {data.value}X
              </button>
            );
          })}
        </div>
        <p>Export and Share</p>
        <div className={css.Social}>
          <button onClick={copyTextHandler}>
            {isCopeid ? (
              <Check_Icon size={Size} color={Color} />
            ) : (
              <File_Text_Icon size={Size} color={Color} />
            )}
            <p>{isCopeid ? "Copied" : "Copy Link"}</p>
          </button>
          <button onClick={whatsappHandler}>
            <Whatsapp_Icon size={Size} color={Color} />
            <p>Whatsapp</p>
          </button>
          <button onClick={twitterHandler}>
            <Twitter_Icon size={Size} color={Color} />
            <p>Tweet</p>
          </button>
        </div>
        <div onClick={Handler_Download_Image} className={css.Download}>
          <button style={{ background: background }}>
            {isDownloading ? "Exporting..." : "Export"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;

//----------------------------------//
// Image Size Data
//----------------------------------//

const imageScaleData = [
  {
    ID: 0,
    value: 1,
    Title: "Low",
  },
  {
    ID: 0,
    value: 2,
    Title: "Normal",
  },
  {
    ID: 1,
    value: 3,
    Title: "High",
  },
  {
    ID: 2,
    value: 4,
    Title: "Heavy",
  },
];
