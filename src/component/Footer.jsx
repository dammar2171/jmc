import logo from "../assets/logo.jpg";
import style from "../css/Footer.module.css";
import { BiChevronRight } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className={`container-fluid py-5  ${style.footerMainContainer}`}>
        <div className="container">
          <div className="row">
            <div className="col-3 d-flex mt-4">
              <img
                className="rounded-circle shadow-lg"
                src={logo}
                width={100}
                height={100}
                alt="logo"
              />
              <h5 className="mt-3 ps-2" style={{ color: "#dad2d2ff" }}>
                Janjyoti <br /> Multiple <br />
                Campus
              </h5>
            </div>
            <div className="col-2">
              <h5 className="ms-4 text-white">Quick Links</h5>
              <ul>
                <li>
                  <a href="#">
                    <BiChevronRight />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BiChevronRight />
                    About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BiChevronRight />
                    Course
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BiChevronRight />
                    Events
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BiChevronRight />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h5 className="ms-4 text-white">Courses</h5>
              <ul>
                <li>
                  <a href="#">
                    <BiChevronRight />
                    Bachelor in Computer Application
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BiChevronRight />
                    Bachelor in Business Studies
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BiChevronRight />
                    Master's in Business Studies
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BiChevronRight />
                    Bachelor in Social Work
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BiChevronRight />
                    +2
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h5 className="ms-4 text-white">Social Media Links</h5>
              <ul>
                <li>
                  <a href="#">
                    <FaFacebook lassName="me-3" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram lassName="me-2" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter lassName="me-2" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWhatsapp lassName="me-2" />
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedinIn className="me-2" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className={`container-fluid py-3 ${style.costumBottomFooter}`}>
        <div className="container ">
          <h6 className="text-center">
            Copyright © 2025{" "}
            <a
              style={{ color: "#dad2d2ff", textDecoration:"none"}}
              href="https://www.facebook.com/jmc2058"
            >
              Janjyoti Multiple Campus
            </a>
            . Designed by{" "}
            <a
              style={{ color: "#dad2d2ff", textDecoration:"none" }}
              href="https://porfolio-website-d11psk0ih-dammar2171s-projects.vercel.app/"
            >
              Dammar Bhatt ~
            </a>
              All rights reserved.
          </h6>
        </div>
      </div>
    </>
  );
};
export default Footer;
