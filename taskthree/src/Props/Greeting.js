// Greeting.js
import React from "react";
import Headz from "./Headz";
const Greeting = ({ name, isLoggedIn }) => {
  return (
    <div>
      {" "}
      <h2>Hello, {isLoggedIn ? name : "Guest"}!</h2>
      <Headz title={'How are you'} />
    </div>
  );
};
export default Greeting;
