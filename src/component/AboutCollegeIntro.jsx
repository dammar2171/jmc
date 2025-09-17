import style from "../css/AboutCollegeIntro.module.css";

const AboutCollegeIntro = () => {
  return (
    <div className={`container-fluid ${style.costumColllegeIntro}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className={style.jmcHeading}>JANJYOTI MULTIPLE CAMPUS</h2>
            <p
              className={`text-white fs-5 fs-sm-6 ${style.aboutCollegeIntoPara}`}
            >
              Janjyoti Multiple Campus, established in 2001 in Bhimdattnagar,
              Kanchanpur, is a vibrant academic <br />
              institution affiliated with Tribhuvan University and the National
              Examinations Board.
            </p>
            <i className={`${style.quote} text-white`}>
              "Creativity is intelligence having fun." — Albert Einstein
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCollegeIntro;
