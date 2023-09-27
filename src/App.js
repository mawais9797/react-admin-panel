import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

function App() {
  const [theme, colorMode] = useMode();
  console.log("App Theme: ", theme.palette.mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider value={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
