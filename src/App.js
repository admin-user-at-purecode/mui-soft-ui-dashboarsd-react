import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Sidenav from "./components/sidebar";
import { SoftUIControllerProvider } from "./components/context";
function App() {
  return (
    <SoftUIControllerProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidenav brandName="Soft UI Dashboard" />
    </ThemeProvider>
    </SoftUIControllerProvider>

  );
}

export default App;
