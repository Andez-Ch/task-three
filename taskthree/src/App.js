import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Header } from "./Header";
import FirstJsxSyntax from "./JSX-Syntax/FirstJsxSyntax";
import ThirdJsxSyntax from "./JSX-Syntax/ThirdJsxSyntax";
import SecondJsxSyntax from "./JSX-Syntax/SecondJsxSyntax";
import Class_Comp from "./class-component/class_comp";
import FunctionalComp from "./functional-component/FunctionalComp";
import Greeting from "./Props/Greeting";
import Headz from "./Props/Headz";
import AndezCh from "./State/AndezCh";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FirstJsxSyntax" element={<FirstJsxSyntax />} />
        <Route path="/SecondJsxSyntax" element={<SecondJsxSyntax />} />
        <Route path="/ThirdJsxSyntax" element={<ThirdJsxSyntax />} />
        <Route path="/class_comp" element={<Class_Comp />} />
        <Route path="/FunctionalComp" element={<FunctionalComp />} />
        <Route path="/Greeting" element={<Greeting />} />
        <Route path="/Headz" element={<Headz />} />
        <Route path="/AndezCh" element={<AndezCh />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;