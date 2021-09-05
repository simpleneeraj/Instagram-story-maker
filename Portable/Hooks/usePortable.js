import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BACKGROUND,
  FONTSIZE,
  FONTWEGHT,
  IMAGESCALE,
  MODELDOWNLOAD,
  TEMPLATE,
  THEME,
  THOUGHT,
  USERIMAGE,
} from "../../Redux/reducers/portable";
import { random } from "lodash";
import { TwoColorBackgrounds } from "../Constent/Gradients";
import { Thoughts_500 } from "../Constent/Thoughts/Thoughts_500";
import ThemesData from "../Constent/Themes";

const usePortable = () => {
  //----------------------------------//
  // Redux Store Values
  //----------------------------------//

  const {
    theme,
    background,
    thought,
    userImage,
    template,
    modelDownload,
    fontSize,
    fontWeight,
    imagescale,
  } = useSelector((state) => state.reducer.portable);
  //----------------------------------//
  // Dispatch Simple Handler
  //----------------------------------//
  const dispatch = useDispatch();
  const Handler = (type, value) => {
    dispatch({
      type: type,
      payload: value,
    });
  };

  //----------------------------------//
  // Handlers
  //----------------------------------//
  const [themeNumber, setThemeNumber] = useState(0);
  const themeHandler = useCallback(() => {
    setThemeNumber((i) => i + 1);
    if (themeNumber >= ThemesData.length - 1) {
      setThemeNumber(0);
    }
    Handler(THEME, ThemesData[themeNumber]);
  }, [theme]);
  //===================================//
  const thoughtHandler = useCallback(() => {
    const number = random(0, Thoughts_500.length - 1);
    Handler(THOUGHT, {
      content: Thoughts_500[number].content,
      author: Thoughts_500[number].author,
    });
  }, [thought]);
  //===================================//
  const userImageHandler = useCallback(() => {
    Handler(USERIMAGE, value);
  }, [userImage]);
  //===================================//
  const backgroundHandler = useCallback(() => {
    const number = random(0, TwoColorBackgrounds.length - 1);
    const background = TwoColorBackgrounds[number].GrandientValue.toString();
    Handler(BACKGROUND, `linear-gradient(${background} )`);
    // console.log(number);
  }, [background]);
  //===================================//
  const templateHandler = useCallback(() => {
    Handler(TEMPLATE, value);
  }, [template]);
  //===================================//
  const modelDownloadHandler = useCallback(
    (value) => {
      Handler(MODELDOWNLOAD, value);
    },
    [modelDownload]
  );
  //===================================//
  const [fontSizeValue, setfontSizeValue] = useState(13);
  const fontSizeHandler = useCallback(() => {
    setfontSizeValue((i) => i + 1);
    if (fontSizeValue >= 30) {
      setfontSizeValue(13);
    }
    Handler(FONTSIZE, fontSizeValue);
    // console.log(fontSizeValue);
  }, [fontSize]);
  //===================================//
  const fontWeightHandler = useCallback(
    (value) => {
      Handler(FONTWEGHT, value);
    },
    [fontWeight]
  );
  const imagescaleHandler = useCallback(
    (value) => {
      Handler(IMAGESCALE, value);
    },
    [imagescale]
  );

  //----------------------------------//
  // Return Values and Handlers
  //----------------------------------//
  return {
    //----------------------------------//
    //Values
    //----------------------------------//
    theme,
    background,
    thought,
    template,
    modelDownload,
    fontSize,
    fontWeight,
    imagescale,
    //----------------------------------//
    //Handlers
    //----------------------------------//
    themeHandler,
    thoughtHandler,
    userImageHandler,
    backgroundHandler,
    templateHandler,
    modelDownloadHandler,
    fontSizeHandler,
    fontWeightHandler,
    imagescaleHandler,
  };
};

export default usePortable;
