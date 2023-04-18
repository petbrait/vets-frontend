import GlobalStyle from "../styles/global";
import { patientsReducer } from "@/reducers/patients";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const store = createStore(patientsReducer);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
