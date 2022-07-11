import Paper from "@mui/material/Paper";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/system/ThemeProvider";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import SideNavBar from "./Content/SideNavBar";
import { useGlobalContext } from "./Context/GlobalContext";
import Assets from "./Pages/Assets";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  const ctxGlobal = useGlobalContext();
  const theme = createTheme({
    palette: {
      mode: ctxGlobal.state.darkMode ? "dark" : "light",
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Paper>
          <div className="App">
            <SideNavBar />
            {ctxGlobal.state.darkMode ? "true" : "false"}
            <Assets />
          </div>
        </Paper>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
