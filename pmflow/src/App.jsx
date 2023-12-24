import React from "react";
import "./App.css";
import PmTable from "./Components/PmTable/PmTable";
import Team from "./Common/Team/Team";

const App = () => {
  return (
    <>
      <div style={{display:"flex" , justifyContent:"center" , gap:"10px"}}>
        <Team name={"Developer"}/>
        <Team name={"Designers"}/>
        <Team name={"QA"}/>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PmTable />
      </div>
    </>
  );
};

export default App;
