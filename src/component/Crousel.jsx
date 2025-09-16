import img1 from "../assets/clz1.jpeg";
import img2 from "../assets/clz2.jpg";
import img3 from "../assets/clz3.jpg";
import style from "../css/Crousel.module.css";
const Crousel = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className={`d-block w-100 ${style.carouselImage}`}
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="fs-1 text-white mb-3">Empowering Futures</h5>
              <p className="fs-4 text-white mb-5">
                Janjyoti Multiple Campus offers career-focused programs in
                Management, IT, and Humanities—preparing students to lead with
                confidence and skill.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className={`d-block w-100 ${style.carouselImage}`}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fs-1 text-white mb-3">Academic Excellence</h5>
              <p className="fs-4 text-white mb-5">
                With experienced faculty and modern facilities, Janjyoti
                delivers quality education that meets national standards and
                global expectations.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className={`d-block w-100 ${style.carouselImage}`}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fs-1 text-white mb-3">Beyond the Classroom</h5>
              <p className="fs-4 text-white mb-5">
                From seminars to community outreach, students at Janjyoti engage
                in real-world experiences that shape leadership and lifelong
                learning.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Crousel;
