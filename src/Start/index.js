import React from "react";
import Navbar from "../Navbar";
import img1 from "../img1.png";

const Start = () => {
  return (
    <div className="landing">
      <Navbar />
      <div className="teksselamat">Selamat Datang </div>

      <div className="tekspembuka">Silakan Masuk ke Akun Admin anda...</div>
      <div>
        <a className="btn btnmasuk btn-primary fw-bold" href="/masuk" role="button">
          Masuk
        </a>
      </div>
      <div>
        <div className="text-center img1">
          <img src={img1} className="rounded" alt="..." />
        </div>{" "}
      </div>
    </div>
  );
};
export default Start;
