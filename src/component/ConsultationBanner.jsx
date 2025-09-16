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
        <div className="row">
          <div className="col-8">
            <h3>Don't hesitate to Contact Us for Free Consultation!</h3>
          </div>
          <div className="col-4">
            <button onClick={goToContact} id="consultationBtn">
              Contact Us <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConsultationBanner;
