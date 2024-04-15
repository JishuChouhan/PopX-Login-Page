import React from "react";
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div className="first">
      <div className="first-container">
      <h1>Welcome to PopX</h1>
      <br />
      <p>
        Hello Everyone Login to our page, to find <br /> your capabilities of your Web
        Dev Journey...
      </p>
      <br />
      <Link to="/second" className="create-acc-btn" type="button">
        Create Account
      </Link>
      <Link to="/third" className="registered-btn" type="button">
        Already Registered?Login
      </Link>
      </div>
    </div>
  );
};

export default First;
