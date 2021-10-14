import React from "react";
import { ThemeProvider } from "@mui/styles";

import { RouterRoutes } from "./integrations";
import { principalTheme, GlobalStyles } from "./models";

function App() {
  return (
    <ThemeProvider theme={principalTheme}>
      <RouterRoutes />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
