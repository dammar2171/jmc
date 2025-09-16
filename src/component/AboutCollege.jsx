import image from "../assets/jmcPic.jpg";
const AboutCollege = () => {
  return (
    <section className="container-fluid py-5">
      <div className="container">
        <div className="row sponsoredSection justify-content-center align-items-center">
          <div className="col-6">
            <img src={image} />
          </div>
          <div className="col-6">
            <span className="d-flex gap-2 justify-content-center ">
              <p id="sponserText">Janjyoti multiple campus</p>
            </span>
            <h3>Excellence Meets Innovation in Education</h3>
            <p id="sponserDescription">
              Janjyoti Multiple Campus, established in 2001 in Bhimdattnagar,
              Kanchanpur, is a vibrant academic institution affiliated with
              Tribhuvan University and the National Examinations Board.
            </p>
            <button id="aboutClz-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutCollege;
