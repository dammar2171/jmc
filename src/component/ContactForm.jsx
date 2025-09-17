import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <div className="container-fluid py-5 contact-form-container">
      <div className="container">
        <div className="row">
          {/* Left: Address */}
          <div className="col-md-5 col-12 mb-4">
            <div className="d-flex">
              <h5 style={{ fontSize: "20px", color: "#3786cf" }}>
                Get in Touch <hr />
              </h5>
            </div>
            <h1 style={{ fontSize: "35px", color: "#706b6bff" }}>Address</h1>
            <ul className="contactList">
              <li>
                <FaLocationDot /> Bhimdattnagar-18, Kanchanpur
              </li>
              <li>
                <FaPhoneSquareAlt /> 099-418131
              </li>
              <li>
                <MdEmail /> janjyoticampus2058@gmail.com
              </li>
            </ul>
          </div>

          {/* Right: Form */}
          <div className="col-md-7 col-12">
            <div className="d-flex">
              <h5 style={{ fontSize: "20px", color: "#3786cf" }}>
                Send us a message <hr />
              </h5>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="emailAddress" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  placeholder="Enter your email"
                />
                <div id="emailHelp" className="form-text">
                  Enter your currently using email.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={6}
                  placeholder="Write your message here"
                />
              </div>
              <button type="submit" className="contact-submitBtn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
