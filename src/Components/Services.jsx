
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import React from "react";

function Services() {
  const [auth, { handleSignout }] = useContext(AuthContext);
  console.log(auth);

  // Redirect
  if (!auth) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      Services Page
      <div>
        <button onClick={handleSignout}>SIGN OUT</button>
      </div>
    </div>
  );
}

export default Services;
