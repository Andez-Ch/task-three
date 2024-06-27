import React from "react";

const FunctionalComp = () => {
  return (
    <div class="heading">
      <h1> This is a functional component syntax </h1>
      

      <div class="form-container">
      <h2>Login Form</h2>
        <form class="form">
          <label for="username">User Name:</label>
          <input type="text" id="username" name="username" required />

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <input type="submit" name="login_submit" value="Login" />

          <a href="Form.php" class="signup-link">
            Sign Up
          </a>
        </form>
      </div>
    </div>
  );
};

export default FunctionalComp;
