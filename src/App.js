import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, tokens, useMode } from "./theme";
// import { CssBaseline } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  console.log("App Theme: ", theme.palette.mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <div className="app">
          <main className="content" style={{ background: colors.primary[400] }}>
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
