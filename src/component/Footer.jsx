import logo from "../assets/logo.jpg";
import style from "../css/Footer.module.css";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  const navigate = useNavigate();
  const goBca = () => {
    navigate("/courses/bca");
  };
  const goBbs = () => {
    navigate("/courses/bbs");
  };
  const goBsw = () => {
    navigate("/courses/bsw");
  };
  return (
    <>
      <footer className={`container-fluid py-5  ${style.footerMainContainer}`}>
        <div className="container">
          <div className="row">
            <div className="col-3 d-flex mt-4">
              <Link to={"/"}>
                <img
                  className="rounded-circle shadow-lg"
                  src={logo}
                  width={100}
                  height={100}
                  alt="logo"
                />
              </Link>
              <h5 className="mt-3 ps-2" style={{ color: "#dad2d2ff" }}>
                Janjyoti <br /> Multiple <br />
                Campus
              </h5>
            </div>
            <div className="col-2">
              <h5 className="ms-4 text-white">Quick Links</h5>
              <ul>
                <li>
                  <Link to={"/"}>
                    <BiChevronRight />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/about"}>
                    <BiChevronRight />
                    About
                  </Link>
                </li>
                <li>
                  <Link to={"/courses/bca"}>
                    <BiChevronRight />
                    Course
                  </Link>
                </li>
                <li>
                  <Link to={"/event"}>
                    <BiChevronRight />
                    Events
                  </Link>
                </li>
                <li>
                  <Link to={"/contact"}>
                    <BiChevronRight />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h5 className="ms-4 text-white">Courses</h5>
              <ul>
                <li>
                  <a onClick={goBca} href="#">
                    <BiChevronRight />
                    Bachelor in Computer Application
                  </a>
                </li>
                <li>
                  <a onClick={goBbs} href="#">
                    <BiChevronRight />
                    Bachelor in Business Studies
                  </a>
                </li>

                <li>
                  <a onClick={goBsw} href="#">
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
                  <a href="https://www.facebook.com/jmc2058">
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
              style={{ color: "#dad2d2ff", textDecoration: "none" }}
              href="https://www.facebook.com/jmc2058"
            >
              Janjyoti Multiple Campus
            </a>
            . Designed by{" "}
            <a
              style={{ color: "#dad2d2ff", textDecoration: "none" }}
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
