import React from "react";
import Navbar from "../Navbar";
// import img2 from "../img2.png";

const Masuk = () => {
  return (
    <div className="bgmasuk">
      {/* <div>
        <div className="text-center img2">
          <img src={img2} className="rounded" alt="..." />
        </div>{" "}
      </div> */}

      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <form className="container masuk shadow-lg">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label text-white">
            Email address
          </label>
          <div className="form-floating">
            <input type="email" required className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" required className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Masuk
        </button>
        <p className="mt-5 mb-3 text-muted text-white">@lee_hongw</p>
      </form>
    </div>
  );
};
export default Masuk;
