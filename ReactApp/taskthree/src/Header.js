import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
      <Link to="/functional_comp">Functional component</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/class_comp">Class component</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/FirstJsxSyntax">First jsx component</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/SecondJsxSyntax">Second Jsx component</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/ThirdJsxSyntax">Third Jsx component</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/Greeting">First Prop syntax</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/Head">Second Prop syntax</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/AndezCh">State syntax</Link>&nbsp;&nbsp;&nbsp;

    </div>
  );
};
