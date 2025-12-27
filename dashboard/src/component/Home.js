import React from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import { Particles } from "../Ui_Particles/particles";

const Home = () => {
  return (
    <div>
       
      <Particles color="#000000" />
      <TopBar />
      <Dashboard />
    </div>
  );
};

export default Home;