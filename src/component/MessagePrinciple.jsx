import principle from "../assets/principleSir.jpg";
const MessagePrinciple = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-center flex-column flex-md-row">
          {/* Text Column */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h3>Message From Campus Chief</h3>
            <p className="fs-6 text-start">
              Welcome to Janjyoti Multiple Campus, where tradition meets
              innovation and learning becomes a lifelong journey. As Campus
              Chief, I am proud to lead an institution that is deeply committed
              to academic excellence, personal growth, and community engagement.
              At Janjyoti, we believe education is not just about acquiring
              degrees—it's about shaping character, nurturing creativity, and
              preparing students to thrive in a rapidly changing world. Our
              dedicated faculty, modern facilities, and student-centered
              approach ensure that every learner receives the support and
              inspiration they need to succeed. Whether you're pursuing science,
              management, humanities, or technology, you'll find a vibrant
              environment that encourages curiosity, collaboration, and
              leadership. We are more than a campus—we are a community. A place
              where ideas are born, friendships are forged, and futures are
              built. I invite you to explore, engage, and excel with us. Let
              Janjyoti be the light that guides your academic and personal
              journey. Warm regards,
              <br /> <b>Prakash Joshi</b> <br />
              Campus Chief <br />
              <i>Janjyoti Multiple Campus</i>
            </p>
          </div>

          {/* Image Column */}
          <div className="col-12 col-md-6 d-flex justify-content-center principle-image-container">
            <img
              src={principle}
              alt="principle-image"
              className="img-fluid rounded"
              style={{ maxHeight: "420px", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePrinciple;
