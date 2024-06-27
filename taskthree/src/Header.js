import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

export const Header = () => {
  return (
    <div class="header-container">
      <Link class="header-link" to="/">Home</Link> &nbsp;&nbsp;&nbsp;
      <Link class="header-link" to="/FunctionalComp">Functional component</Link>&nbsp;&nbsp;&nbsp;
      <Link class="header-link" to="/class_comp">Class component</Link>&nbsp;&nbsp;&nbsp;
      <Link class="header-link" to="/FirstJsxSyntax">First jsx component</Link>&nbsp;&nbsp;&nbsp;
      <Link class="header-link" to="/SecondJsxSyntax">Second Jsx component</Link>&nbsp;&nbsp;&nbsp;
      <Link class="header-link" to="/ThirdJsxSyntax">Third Jsx component</Link>&nbsp;&nbsp;&nbsp;
      <Link class="header-link" to="/Greeting">First Prop syntax</Link>&nbsp;&nbsp;&nbsp;
      <Link class="header-link" to="/Headz">Second Prop syntax</Link>&nbsp;&nbsp;&nbsp;
      <Link class="header-link" to="/AndezCh">State syntax</Link>&nbsp;&nbsp;&nbsp;

    </div>
  );
};
