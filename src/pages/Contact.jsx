import PageTop from "../component/PageTop";
import Footer from "../component/Footer";
import contactBanner from "../assets/contact-banner.png";
import ConsultationBanner from "../component/ConsultationBanner";
import ContactForm from "../component/ContactForm";
import ContactMap from "../component/ContactMap";
const Contact = () => {
  return (
    <>
      <PageTop Banner={contactBanner} />
      <ContactForm />
      <ContactMap />
      <ConsultationBanner />
      <Footer />
    </>
  );
};
export default Contact;
