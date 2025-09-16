import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import style from "../css/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <header
        className={`container-fluid py-2 shadow-lg sticky-top bg-white ${style.navbarContainer}`}
      >
        <nav className="container text-dark">
          <div className="row align-items-center">
            <div className="col-3 d-flex">
              <Link to={"/"}>
                <img className={style.logoImage} src={logo} alt="Logo" />
              </Link>
              <p className={`text-dark ps-2 mt-4 ${style.navText}`}>
                Janjyoti Multiple <br />
                Campus
              </p>
            </div>

            <div className="col-7">
              <ul className={`d-flex ${style.navList}`}>
                <li className="px-3">
                  <Link to="/" className="text-dark text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="px-3">
                  <Link to="/about" className="text-dark text-decoration-none">
                    About
                  </Link>
                </li>
                <li className="px-3">
                  <div className="dropdown">
                    <button
                      className={`btn dropdown-toggle text-dark ${style.dropdownButton}`}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Courses
                    </button>
                    <ul className={`dropdown-menu ${style.dropdownMenu}`}>
                      <li>
                        <Link
                          to="/courses/bca"
                          className={`dropdown-item ${style.dropdownItem}`}
                        >
                          BCA
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses/bbs"
                          className={`dropdown-item ${style.dropdownItem}`}
                        >
                          BBS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses/bsw"
                          className={`dropdown-item ${style.dropdownItem}`}
                        >
                          BSW
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="px-3">
                  <Link to="/event" className="text-dark text-decoration-none">
                    Event and Activities
                  </Link>
                </li>
                <li className="px-3">
                  <Link
                    to="/contact"
                    className="text-dark text-decoration-none"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-2 text-end">
              <button
                className={style.registrationButton}
                data-bs-toggle="modal"
                data-bs-target="#registrationModal"
              >
                Registration
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className="modal fade"
        id="registrationModal"
        tabIndex="-1"
        aria-labelledby="registrationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registrationModalLabel">
                Registration Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile</label>
                  <input type="tel" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Interested Course</label>
                  <select className="form-select" required>
                    <option value="">Select a course</option>
                    <option value="BCA">BCA</option>
                    <option value="BBS">BBS</option>
                    <option value="BSW">BSW</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
