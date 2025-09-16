import CourceTopBar from "../component/CourceTopBar";
import bcaImg from "../assets/BCA-banner.jpg";
import CourceDescription from "../component/CourceDescription";
import ConsultationBanner from "../component/ConsultationBanner";
import Footer from "../component/Footer";
const Bca = () => {
  const bcaData = [
    {
      id: 1,
      special: "bca",
      title: "Bachelor in computer Application(BCA)",
      description:
        "The Bachelor of Computer Application (BCA) program at our college, affiliated with Tribhuvan University, is a dynamic and career-oriented undergraduate degree designed to empower students with both theoretical knowledge and hands-on expertise in the field of Information Technology.This four-year, eight-semester program blends computer science fundamentals with real-world applications, preparing students to thrive in todays fast-paced tech industry. Graduates of the BCA program are equipped to pursue diverse and rewarding career paths, including:",
      careerOputunitiesHeading: "Carrer Oppurtunities",
      careerOputunities: {
        first:
          "Software Developer :Build robust applications and software systems for businesses and consumers",
        second:
          "Web Developer : Design and deploy responsive, user-friendly websites and web apps",
        third:
          "Mobile App Developer : Create innovative apps for Android and iOS platforms",
        fourth:
          "Database Administrator : Manage and secure organizational data with efficiency",
        fifth:
          "System Analyst : Evaluate and improve business processes through technology",
        sixth:
          "Cybersecurity Analyst : Safeguard digital assets from cyber threats and vulnerabilities",
        seventh:
          "Cloud Solutions Architect : Design scalable cloud-based systems and services.",
      },
      BeyondEmpHeading: "Beyond Employment",
      BeyondEmpDesc:
        "The BCA degree from Tribhuvan University also lays the groundwork for broader opportunities:",
      BeyondEmp: {
        first:
          "Entrepreneurship : Launch your own tech startup or freelance brand",
        second:
          "Higher Education : Pursue master's degrees in IT, computer science, data analytics, and more",
        third:
          "Freelancing : Tap into global freelance markets in coding, UI/UX design, and IT consulting",
      },
      more: "Whether you're passionate about coding, design, data, or innovation, the BCA program at our Tribhuvan University-affiliated college offers the perfect launchpad for a successful career in IT. With a curriculum that evolves alongside industry trends, students graduate not just with a degree—but with the confidence and capability to lead in the digital age.",
      eligibleHeading: "Eligibility Criteria",
      eligibileList: {
        first:
          "Must have completed 10+2 (Science, Management, or any stream) or equivalent recognized by TU.",
        second: "Minimum ‘C’ grade in all subjects in the new grading system",
        third:
          "Must pass the TU BCA Entrance Examination conducted by the Faculty of Humanities & Social Sciences.",
        fourth:
          "Must have studied English as a full paper (compulsory) in +2 or equivalent level.",
      },
    },
  ];

  const bcaHeading = ["Bachelor of Computer Application (BCA)"];
  return (
    <>
      <CourceTopBar courceImg={bcaImg} courceHeading={bcaHeading} />
      {bcaData.map((data) => (
        <CourceDescription key={data.id} data={data} />
      ))}
      <ConsultationBanner />
      <Footer />
    </>
  );
};
export default Bca;
