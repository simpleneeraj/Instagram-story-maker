import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import Metadata from "../Head/Metadata";
import store from "../Redux/store";
import "../styles/global.scss";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ChakraProvider resetCSS={true}>
          <Metadata />
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default MyApp;
