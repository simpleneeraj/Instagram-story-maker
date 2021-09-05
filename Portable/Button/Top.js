import css from "../styles/Top.module.scss";
import { Magic, Category, Tree } from "../Constent/Icons";

const Top = () => {
  return (
    <>
      <div className={css.Top}>
        <div className={css.TopBox}>
          <div>
            <button aria-label="Post Changer">
              <Category />
            </button>
          </div>
          <div>
            <button aria-label="Magic">
              <Tree />
            </button>
          </div>
          <div>
            <button aria-label="Theme changer">
              <Magic />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;

// const useTheme = () => {
//   const dispatch = useDispatch();
//   //Generate Number for theme
//   const [ThemeNumber, setThemeNumber] = useState(0);
//   //Array Original Length
//   let originalLength = PostBoxThemes.length - 1;
//   //Handler
//   const ThemeHandler = (e) => {
//     e.preventDefault();
//     setThemeNumber((pre) => pre + 1);
//     dispatch({
//       type: THEME,
//       payload: {
//         themes: PostBoxThemes[ThemeNumber],
//       },
//     });
//   };

//   useEffect(() => {
//     ThemeHandler;
//     if (ThemeNumber > originalLength) {
//       setThemeNumber(0);
//     }
//   }, [ThemeNumber]);
//   return {
//     ThemeHandler,
//   };
// };
