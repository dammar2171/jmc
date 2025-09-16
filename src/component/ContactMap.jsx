const ContactMap = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6385394061413!2d80.19419937476464!3d28.963459868977456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1aeada6546647%3A0x6f3b99bf5befa412!2sJanajyoti%20Multiple%20Campus!5e1!3m2!1sen!2snp!4v1758017297585!5m2!1sen!2snp"
                width="100%"
                style={{ border: 0 }}
                height="500"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
