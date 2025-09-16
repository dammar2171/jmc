import AboutCollegeDescription from "../component/AboutCollegeDescription";
import AboutCollegeIntro from "../component/AboutCollegeIntro";
import AboutVisionMission from "../component/AboutVisionMission";
import StaffCard from "../component/StaffCard";
import Footer from "../component/Footer";
import ConsultationBanner from "../component/ConsultationBanner";
const About = () => {
  return (
    <>
      <AboutCollegeIntro />
      <AboutCollegeDescription />
      <AboutVisionMission />
      <StaffCard />
      <ConsultationBanner />
      <Footer />
    </>
  );
};
export default About;
