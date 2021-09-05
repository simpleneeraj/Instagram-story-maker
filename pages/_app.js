import { Provider } from "react-redux";
import Metadata from "../Head/Metadata";
import store from "../Redux/store";
import "../styles/global.scss";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Metadata />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
