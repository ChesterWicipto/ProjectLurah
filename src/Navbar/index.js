import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg colorNav navbar-light fw-bold shadow-sm">
        <div className="collapse navbar-collapse navbar text-uppercase " id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link fs-3" href="/">
                Data
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-3" href="/admin">
                Form
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-lg  navbar-light colorNav fw-bold shadow-sm fixed-top">
        <div className="container text-uppercase">
          <a className="navbar-brand" href="#">
            <i className="bi bi-person-circle"></i>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/form">
                  <i className="bi bi-house-door-fill me-4"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/data">
                  Data
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin">
                  Form
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
