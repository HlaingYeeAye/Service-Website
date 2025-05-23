import React from "react";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoute";

{/*const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white min-h-screen overflow-x-hidden">
      <div className="relative z-10">
       <Home/>
      </div>
    </div>
  );
};*/}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;