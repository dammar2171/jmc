import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import style from "../css/Navbar.module.css";

const Navbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <>
      {/* --- Header / Navbar --- */}
      <header
        className={`container-fluid py-2 shadow-lg sticky-top bg-white ${style.navbarContainer}`}
      >
        <nav className="container text-dark">
          <div className="row align-items-center">
            {/* --- Logo + Campus Text --- */}
            <div className="col-7 col-lg-3 d-flex align-items-center">
              <Link to={"/"}>
                <img
                  className={`${style.logoImage} d-inline-block`}
                  src={logo}
                  alt="Logo"
                  style={{ maxWidth: "80px" }}
                />
              </Link>
              <p
                className={`text-dark ps-2 m-0 ${style.navText}`}
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.1rem",
                }}
              >
                Janjyoti Multiple <br />
                Campus
              </p>
            </div>

            {/* --- Desktop Nav Links --- */}
            <div className="col-lg-7 d-none d-lg-block">
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

            {/* --- Desktop Registration Button --- */}
            <div className="col-lg-2 text-end d-none d-lg-block">
              <button
                className={style.registrationButton}
                data-bs-toggle="modal"
                data-bs-target="#registrationModal"
              >
                Registration
              </button>
            </div>

            {/* --- Mobile/Tablet Hamburger --- */}
            <div className="col-5 d-lg-none text-end">
              <button
                className="btn border-0"
                onClick={() => setShowOffcanvas(true)}
                aria-label="Menu"
              >
                <i className="bi bi-list" style={{ fontSize: "2.2rem" }}></i>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* --- Offcanvas for Mobile/Tablet --- */}
      <div
        className={`offcanvas offcanvas-end ${showOffcanvas ? "show" : ""}`}
        style={{
          top: 0, // aligns to top
          height: "100%", // full height
          visibility: showOffcanvas ? "visible" : "hidden",
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          paddingTop: "1rem",
        }}
        tabIndex="-1"
        onClick={() => setShowOffcanvas(false)}
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold">Menu</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowOffcanvas(false)}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li className="mb-3">
              <Link to="/" onClick={() => setShowOffcanvas(false)}>
                Home
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/about" onClick={() => setShowOffcanvas(false)}>
                About
              </Link>
            </li>
            <li className="mb-3">
              <p className="mb-1 fw-bold">Courses</p>
              <Link to="/courses/bca" onClick={() => setShowOffcanvas(false)}>
                BCA
              </Link>
              <br />
              <Link to="/courses/bbs" onClick={() => setShowOffcanvas(false)}>
                BBS
              </Link>
              <br />
              <Link to="/courses/bsw" onClick={() => setShowOffcanvas(false)}>
                BSW
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/event" onClick={() => setShowOffcanvas(false)}>
                Event and Activities
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/contact" onClick={() => setShowOffcanvas(false)}>
                Contact
              </Link>
            </li>
            <li className="mt-4">
              <button
                className={`btn btn-primary  ${style.registrationButton} ${style.offcanvasRegistration}`}
                data-bs-toggle="modal"
                style={{ width: "120px" }}
                data-bs-target="#registrationModal"
                onClick={() => setShowOffcanvas(false)}
              >
                Registration
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="modal fade"
        id="registrationModal"
        tabIndex="-1"
        aria-labelledby="registrationModalLabel"
        aria-hidden="true"
      >
        {/* Mobile modal */}
        <div
          className="modal-dialog modal-dialog-scrollable d-block d-md-none"
          style={{ margin: "1rem" }}
        >
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
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Tablet & Desktop modal */}
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable d-none d-md-block"
          style={{ maxWidth: "500px" }}
        >
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
                <button type="submit" className="btn btn-primary w-100">
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
