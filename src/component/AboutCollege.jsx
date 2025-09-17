import image from "../assets/jmcPic.jpg";
import { useNavigate } from "react-router-dom";

const AboutCollege = () => {
  const navigate = useNavigate();
  const gotoAbout = () => {
    navigate("/about");
  };

  return (
    <section className="container-fluid py-5">
      <div className="container">
        <div className="row sponsoredSection justify-content-center align-items-center flex-column flex-md-row">
          {/* Image Column */}
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            <img
              src={image}
              alt="Janjyoti Campus"
              className="img-fluid about-image"
            />
          </div>

          {/* Text Column */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <span className="d-flex gap-2 justify-content-center justify-content-md-start mb-2">
              <p id="sponserText">Janjyoti multiple campus</p>
            </span>
            <h3 style={{ color: "#3786cf" }}>
              Excellence Meets Innovation in Education
            </h3>
            <p id="sponserDescription">
              Janjyoti Multiple Campus, established in 2001 in Bhimdattnagar,
              Kanchanpur, is a vibrant academic institution affiliated with
              Tribhuvan University and the National Examinations Board.
            </p>
            <button
              className="d-block mx-auto mx-md-0"
              onClick={gotoAbout}
              id="aboutClz-btn"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCollege;
