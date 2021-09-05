import css from "../styles/Bottom.module.scss";
import {
  Download_Cloud_Icon,
  Quotes_Right_Icon,
  Landscape_Icon,
  Font_Size_Icon,
} from "../Constent/Icons";
import usePortable from "../Hooks/usePortable";

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
          <button onClick={fontSizeHandler}>
            <Font_Size_Icon color={color} />
          </button>
          <button onClick={() => modelDownloadHandler(true)}>
            <Download_Cloud_Icon color={color} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Bottom;
