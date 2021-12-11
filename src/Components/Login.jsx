
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import React from "react";

function Login() {
  const [auth, { handleSignIn }] = useContext(AuthContext);
  if (auth) {
    return <Redirect to="/services" />;
  }
  return (
    <div>
      Login Page
      <div>
        <button onClick={handleSignIn}>SIGN IN</button>
      </div>
    </div>
  );
}

export default Login;
