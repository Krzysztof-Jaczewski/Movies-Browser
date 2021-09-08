import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
