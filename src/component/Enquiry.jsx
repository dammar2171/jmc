const Enquiry = () => {
  return (
    <div className="container-fluid main-enquiry-container py-5">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1 className="pt-5">
              Send Your <span className="enquiryHeading-enquiry">Enquiry</span>
            </h1>
            <p className="fs-5 text-white pt-3">
              Always Feel Free To Send Us Your Enquiry.We'll Love to Hear From
              You.
            </p>
            <button className="mt-3" id="download-brochure">
              Download Brochure
            </button>
          </div>
          <div className="col-4">
            <form className="bg-white text-black px-4 py-4 rounded ">
              <h3 className="fw-bold">Send Your Enquiry Now!</h3>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">
                  Full Name:
                </label>
                <input type="text" className="form-control" id="fullname" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message:
                </label>
                <textarea
                  type="text"
                  rows="3"
                  cols="50"
                  placeholder="Type your message here..."
                  className="form-control"
                  id="message"
                />
              </div>
              <button type="submit" id="enquiry-form-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Enquiry;
