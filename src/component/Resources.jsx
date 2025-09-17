import image from "../assets/student.webp";

const Resources = () => {
  return (
    <div className="container-fluid pt-md-5 pt-sm-1">
      <div className="container">
        <div className="row align-items-center flex-column flex-md-row">
          <div className="col-12 col-md-5 mb-4 mb-sm-0 d-flex justify-content-center d-none d-lg-flex">
            <img
              src={image}
              alt="Students"
              className="img-fluid resources-image"
            />
          </div>

          <div className="col-12 col-md-7 download-options text-center text-md-start">
            <h2 className="fs-2 fw-bold">Download College Resources</h2>
            <p>Download the College Brochures and Explore More</p>
            <div className="resource-btnGroup d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-md-start">
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
