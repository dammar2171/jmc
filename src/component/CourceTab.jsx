import React from "react";
import { IoArrowRedoSharp } from "react-icons/io5";
const CourceTab = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 style={{ color: "#3786cf", paddingBottom: "1rem" }}>
              Course Structure of BCA
            </h4>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              {["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"].map(
                (sem, index) => (
                  <li className="nav-item" role="presentation" key={index}>
                    <button
                      className={`nav-link ${index === 0 ? "active" : ""}`}
                      id={`sem${index + 1}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#sem${index + 1}`}
                      type="button"
                      role="tab"
                      aria-controls={`sem${index + 1}`}
                      aria-selected={index === 0 ? "true" : "false"}
                    >
                      {sem} Semester
                    </button>
                  </li>
                )
              )}
            </ul>

            <div className="tab-content" id="myTabContent">
              {/* 1st Semester */}
              <div
                className="tab-pane fade show active"
                id="sem1"
                role="tabpanel"
                aria-labelledby="sem1-tab"
                tabIndex={0}
              >
                <ul>
                  <li>
                    <IoArrowRedoSharp /> Computer Fundamentals & Applications
                  </li>
                  <li>
                    <IoArrowRedoSharp /> English I
                  </li>
                  <li>
                    <IoArrowRedoSharp /> Mathematics I
                  </li>
                  <li>
                    <IoArrowRedoSharp /> Digital Logic
                  </li>
                  <li>
                    <IoArrowRedoSharp /> Society & Technology
                  </li>
                </ul>
              </div>

              {/* 2nd Semester */}
              <div
                className="tab-pane fade"
                id="sem2"
                role="tabpanel"
                aria-labelledby="sem2-tab"
                tabIndex={0}
              >
                <ul>
                  <li>
                    <IoArrowRedoSharp />C Programming
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    English II
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Mathematics II
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Microprocessor & Computer Architecture
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Accountancy
                  </li>
                </ul>
              </div>

              {/* 3rd Semester */}
              <div
                className="tab-pane fade"
                id="sem3"
                role="tabpanel"
                aria-labelledby="sem3-tab"
                tabIndex={0}
              >
                <ul>
                  <li>
                    <IoArrowRedoSharp />
                    Data Structures & Algorithms
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Object Oriented Programming (C++)
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Probability & Statistics
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    System Analysis & Design
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Web Technology I (HTML, CSS, JS)
                  </li>
                </ul>
              </div>

              {/* 4th Semester */}
              <div
                className="tab-pane fade"
                id="sem4"
                role="tabpanel"
                aria-labelledby="sem4-tab"
                tabIndex={0}
              >
                <ul>
                  <li>
                    <IoArrowRedoSharp />
                    Database Management System
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Operating Systems
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Numerical Methods
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Software Engineering
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Web Technology II (PHP / Node Basics)
                  </li>
                </ul>
              </div>

              {/* 5th Semester */}
              <div
                className="tab-pane fade"
                id="sem5"
                role="tabpanel"
                aria-labelledby="sem5-tab"
                tabIndex={0}
              >
                <ul>
                  <li>
                    <IoArrowRedoSharp />
                    Computer Graphics
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Artificial Intelligence
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Java Programming
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Research Methodology
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Elective I (e.g., Mobile Programming)
                  </li>
                </ul>
              </div>

              {/* 6th Semester */}
              <div
                className="tab-pane fade"
                id="sem6"
                role="tabpanel"
                aria-labelledby="sem6-tab"
                tabIndex={0}
              >
                <ul>
                  <li>
                    <IoArrowRedoSharp />
                    Data Communication & Computer Networks
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Compiler Design
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Information Systems
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Elective II (e.g., Cloud Computing)
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Project Work I
                  </li>
                </ul>
              </div>

              {/* 7th Semester */}
              <div
                className="tab-pane fade"
                id="sem7"
                role="tabpanel"
                aria-labelledby="sem7-tab"
                tabIndex={0}
              >
                <ul>
                  <li>
                    <IoArrowRedoSharp />
                    Advanced Java / .NET
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Simulation & Modeling
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Management Information System
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Elective III
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Minor Project
                  </li>
                </ul>
              </div>

              {/* 8th Semester */}
              <div
                className="tab-pane fade"
                id="sem8"
                role="tabpanel"
                aria-labelledby="sem8-tab"
                tabIndex={0}
              >
                <ul>
                  <li>
                    <IoArrowRedoSharp />
                    Cyber Law & Professional Ethics
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    E-Commerce
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Advanced Database / Data Mining
                  </li>
                  <li>
                    <IoArrowRedoSharp />
                    Major Project / Internship
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourceTab;
