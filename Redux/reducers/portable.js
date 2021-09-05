export const THEME = `THEME`;
export const THOUGHT = `THOUGHT`;
export const USERIMAGE = `USERIMAGE`;
export const BACKGROUND = `BACKGROUND`;
export const TEMPLATE = `TEMPLATE`;
export const MODELDOWNLOAD = `MODELDOWNLOAD`;
export const FONTSIZE = `FONTSIZE`;
export const FONTWEGHT = `FONTWEGHT`;
export const IMAGESCALE = `IMAGESCALE`;

const initialState = {
  theme: {
    background: "#ffffff",
    color: "#000000",
    spanColor: "rgba(0, 0, 0, 0.75)",
    spanBackground: "#e6e6e6",
    spanFontWeight: 500,
  },
  thought: {
    content: "If you want to achieve greatness stop asking for permission.",
    author: "simpleNeeraj",
  },
  userImage: `.///.///`,
  background: `linear-gradient(135deg, #ee0979, #ff6a00)`,
  template: 0,
  modelDownload: false,
  fontSize: 13,
  fontWeight: 500,
  imagescale: 2,
};

const portable = (state = initialState, action) => {
  switch (action.type) {
    case THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case THOUGHT:
      return {
        ...state,
        thought: action.payload,
      };
    case USERIMAGE:
      return {
        ...state,
        userImage: action.payload,
      };
    case BACKGROUND:
      return {
        ...state,
        background: action.payload,
      };
    case TEMPLATE:
      return {
        ...state,
        template: action.payload,
      };
    case MODELDOWNLOAD:
      return {
        ...state,
        modelDownload: action.payload,
      };
    case FONTSIZE:
      return {
        ...state,
        fontSize: action.payload,
      };
    case FONTWEGHT:
      return {
        ...state,
        fontWeight: action.payload,
      };
    case IMAGESCALE:
      return {
        ...state,
        imagescale: action.payload,
      };
    default:
      return state;
  }
};

export default portable;
