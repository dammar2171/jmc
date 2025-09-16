import image from "../assets/student.webp";
const Resources = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <img src={image} alt="" />
          </div>
          <div className="col-7 download-options">
            <h2 className="fs-2 fw-bold ">Download College Resources</h2>
            <p>Download the College Brochures and Explore More</p>
            <div className="resource-btnGroup d-flex gap-2">
              <button id="admission-formBtn">Admission Form</button>
              <button>Brochures</button>
              <button>Online Form</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resources;
