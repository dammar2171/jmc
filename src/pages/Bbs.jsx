import CourceTopBar from "../component/CourceTopBar";
import bbsImg from "../assets/bbs-banner.jpeg";
import CourceDescription from "../component/CourceDescription";
import ConsultationBanner from "../component/ConsultationBanner";
import Footer from "../component/Footer";
const Bbs = () => {
  const bbsHeading = ["Bachelor in Business Studies (BBS)"];
  const bbsData = [
    {
      id: 2,
      title: "Bachelor of Business Studies (BBS)",
      description:
        "The Bachelor of Business Studies (BBS) program at our college, affiliated with Tribhuvan University, is a comprehensive four-year undergraduate degree designed to develop future business leaders and entrepreneurs. The program blends management theory with practical skills in accounting, finance, marketing, and organizational management. It aims to equip students with a strong foundation in business principles, decision-making abilities, and critical thinking for success in a competitive global marketplace. Graduates of the BBS program are prepared for a wide range of professional careers across various industries.",
      careerOputunitiesHeading: "Career Opportunities",
      careerOputunities: {
        first:
          "Business Manager: Lead and oversee operations in private or public sector organizations.",
        second:
          "Marketing Executive: Design and execute marketing strategies to grow brands and products.",
        third:
          "Financial Analyst: Evaluate financial data to guide investment and budgeting decisions.",
        fourth:
          "Accountant/Auditor: Manage financial records and ensure compliance with regulations.",
        fifth: "Entrepreneur: Start and grow your own business venture.",
        sixth:
          "Human Resource Officer: Manage recruitment, training, and employee relations.",
        seventh:
          "Banking & Insurance Professional: Work in commercial banks, microfinance, or insurance companies.",
      },
      BeyondEmpHeading: "Beyond Employment",
      BeyondEmpDesc:
        "The BBS degree from Tribhuvan University also provides a strong platform for further opportunities:",
      BeyondEmp: {
        first:
          "Entrepreneurship: Launch and scale your own business or consultancy.",
        second:
          "Higher Education: Pursue master’s programs such as MBA, MBS, or specialized business/finance degrees.",
        third:
          "Professional Certifications: Prepare for ACCA, CA, CFA, or other globally recognized qualifications.",
      },
      more: "The BBS program is ideal for students seeking to build strong managerial skills and a deep understanding of business operations. With a curriculum aligned to industry standards, graduates emerge as capable professionals ready to tackle challenges in both corporate and entrepreneurial landscapes.",
      eligibleHeading: "Eligibility Criteria",
      eligibileList: {
        first:
          "Must have completed 10+2 or equivalent (Management, Science, or any discipline) recognized by Tribhuvan University.",
        second:
          "Minimum second division or ‘C’ grade in all subjects in the new grading system.",
        third:
          "Must pass the entrance test conducted by the respective TU-affiliated campus/college.",
        fourth:
          "Must have studied English as a full paper (compulsory) in +2 or equivalent level.",
      },
    },
  ];

  return (
    <>
      <CourceTopBar courceImg={bbsImg} courceHeading={bbsHeading} />
      {bbsData.map((data) => (
        <CourceDescription key={data.id} data={data} />
      ))}
      <ConsultationBanner />
      <Footer />
    </>
  );
};
export default Bbs;
