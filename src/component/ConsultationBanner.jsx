import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ConsultationBanner = () => {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#F1F3F7" }}
    >
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* 
            - Desktop/tablet: text left (col-md-8), button right (col-md-4)
            - Mobile: full width stacking (col-12)
          */}
          <div className="col-md-8 col-12 mb-3 mb-md-0">
            <h3>Don't hesitate to Contact Us for Free Consultation!</h3>
          </div>

          <div className="col-md-4 col-12">
            <button
              onClick={goToContact}
              id="consultationBtn"
            >
              Contact Us <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBanner;
