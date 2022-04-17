import React from "react";
import Navbar from "../Navbar";

const Start = () => {
  return (
    <div className="landing">
      <Navbar />
      <a className="btn btnmasuk btn-primary fw-bold" href="/masuk" role="button">
        Masuk
      </a>
    </div>
  );
};
export default Start;
