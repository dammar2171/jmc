import image from "../assets/aboutImage.jpg";

const AboutCollegeDescription = () => {
  return (
    <section className="container-fluid py-5">
      <div className="container">
        {/* 
          ✅ Bootstrap classes handle responsiveness:
          - col-lg-6: side-by-side only on large screens
          - col-md-12: full width on tablet/mobile
        */}
        <div className="row sponsoredSection justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
            <img
              src={image}
              className="shadow-lg rounded img-fluid"
              alt="About Janjyoti Multiple Campus"
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <h3
              style={{ color: "#3786cf" }}
              className="text-center text-lg-start mb-3"
            >
              About Janjyoti Multiple Campus
            </h3>
            <p className="lead fs-6 text-justify">
              Janajyoti Multiple Campus, located in Bhimdattnagar-18, Bhasi,
              Mahendranagar, Kanchanpur, is a prominent academic institution in
              Nepal’s Far-Western region. Established in 2001 AD (2058 BS), it
              was founded by a group of education enthusiasts with a mission to
              uplift the standard of education in the area. Affiliated with
              Tribhuvan University and the National Examinations Board (NEB),
              the campus offers a wide range of programs—from +2 level courses
              in Science, Management, Humanities, and Education to Bachelor’s
              and Master’s degrees in Education, Arts, and Business Studies.
              With a strong emphasis on discipline, affordability, and academic
              excellence, Janajyoti has become a trusted name for students
              seeking quality education close to home. The campus boasts modern
              infrastructure including spacious classrooms, a well-equipped
              science and computer lab, a resourceful library, and internet
              facilities to support digital learning. It also provides
              scholarships for deserving and economically disadvantaged
              students, ensuring inclusive access to education. Janajyoti’s
              holistic approach to learning—blending academic rigor with
              personal development—prepares students to meet real-world
              challenges with confidence. Its commitment to nurturing
              responsible citizens and fostering a vibrant academic community
              makes it a cornerstone of higher education in Mahendranagar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCollegeDescription;
