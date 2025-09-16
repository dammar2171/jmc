import { FaArrowRight } from "react-icons/fa";
const ConsultationBanner = () => {
  return (
    <div className="container-fluid py-5" style={{backgroundColor:"#F1F3F7"}}>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h3>Don't hesitate to Contact Us for Free Consultation!</h3>
          </div>
          <div className="col-4">
            <button id="consultationBtn">Contact Us <FaArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConsultationBanner;
