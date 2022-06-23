import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import SideNavBar from "./Content/SideNavBar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <SideNavBar/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
