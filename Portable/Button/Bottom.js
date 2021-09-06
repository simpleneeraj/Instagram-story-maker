import css from "../styles/Bottom.module.scss";
import {
  Download_Cloud_Icon,
  Quotes_Right_Icon,
  Landscape_Icon,
  Font_Size_Icon,
  Brush_Icon,
} from "../Constent/Icons";
import usePortable from "../Hooks/usePortable";
import { debounce } from "lodash";

const Bottom = () => {
  const color = "#fff";

  //----------------------------------//
  // Store Values and Handlers Uses
  //----------------------------------//
  const {
    background,
    backgroundHandler,
    themeHandler,
    thoughtHandler,
    modelDownloadHandler,
    fontSizeHandler,
    textEditModelHandler,
  } = usePortable();

  return (
    <>
      <div className={css.Bottom}>
        <div className={css.BottomBox}>
          <button onClick={backgroundHandler}>
            <span style={{ background: background }}></span>
          </button>
          <button onClick={thoughtHandler}>
            <Quotes_Right_Icon color={color} />
          </button>
          <button onClick={themeHandler}>
            <Landscape_Icon color={color} />
          </button>
          <button onClick={() => textEditModelHandler(true)}>
            <Brush_Icon color={color} />
          </button>
          <button onClick={debounce(() => modelDownloadHandler(true), 500)}>
            <Download_Cloud_Icon color={color} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Bottom;
