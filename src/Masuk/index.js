import React, { useState } from "react";
import Navbar from "../Navbar";
import firebase from "../Firebase";
import { useHistory } from "react-router-dom";

const Masuk = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const masuk = () => {
    const data = {
      email: email,
      password: password,
    };
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("login berhasil");
        history.push("/admin");
      })
      .catch((error) => {
        alert(error);
      });
  };

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
            <input type="email" required className="form-control" id="floatingInput" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" required className="form-control" id="floatingPassword" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
        </div>
        <button className="w-100 btn btn-lg btn-primary" onClick={masuk} type="button">
          Masuk
        </button>
        <p className="mt-5 mb-3 text-muted text-white">@lee_hongw</p>
      </form>
    </div>
  );
};
export default Masuk;
