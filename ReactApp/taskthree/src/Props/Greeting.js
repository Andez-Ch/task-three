// Greeting.js
import React from 'react';
const Greeting = ({ name, isLoggedIn }) => {
  return ( <div>  <h2>Hello, {isLoggedIn ? name : 'Guest'}!</h2> </div>  );
};
export default Greeting;
