import React from "react";
import Navbar from "../Navbar";
import img1 from "../img1.png";
import img2 from "../img2.png";
import img3 from "../img3.png";
import img4 from "../img4.png";
import img5 from "../img5.png";

const Start = () => {
  return (
    <div className="landing">
      <Navbar />
      <div className="teksselamat">Selamat Datang</div>

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
        <div className="text-center img2">
          <img src={img2} className="rounded" alt="..." />
        </div>{" "}
        <div className="text-center img3">
          <img src={img3} className="rounded" alt="..." />
        </div>{" "}
        <div className="text-center img5">
          <img src={img5} className="rounded" alt="..." />
        </div>
        <div className="text-center img4">
          <img src={img4} className="rounded" alt="..." />
        </div>{" "}
      </div>
    </div>
  );
};
export default Start;
