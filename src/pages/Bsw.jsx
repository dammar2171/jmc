import CourceTopBar from "../component/CourceTopBar";
import bswImg from "../assets/bsw-banner.jpg";
import CourceDescription from "../component/CourceDescription";
import ConsultationBanner from "../component/ConsultationBanner";
import Footer from "../component/Footer";
const Bsw = () => {
  const bswData = [
    {
      id: 3,
      title: "Bachelor of Social Work (BSW)",
      description:
        "The Bachelor of Social Work (BSW) program at our college, affiliated with Tribhuvan University, is a four-year undergraduate degree aimed at preparing students to promote social change, development, and empowerment of individuals and communities. The program integrates theoretical knowledge with extensive fieldwork, equipping students with the skills to address social issues such as poverty, inequality, and human rights. BSW graduates are trained to work with diverse populations and drive positive social transformation.",
      careerOputunitiesHeading: "Career Opportunities",
      careerOputunities: {
        first:
          "Social Worker: Provide support and advocacy for individuals, families, and communities in need.",
        second:
          "Community Development Officer: Plan and implement programs to improve community well-being.",
        third:
          "NGO/INGO Professional: Work with national and international organizations on social justice and development projects.",
        fourth:
          "Counselor: Offer guidance and support in schools, hospitals, rehabilitation centers, and community programs.",
        fifth:
          "Policy Analyst: Assist in creating and evaluating public policies related to welfare and social issues.",
        sixth:
          "Human Rights Advocate: Promote and protect human rights in various settings.",
        seventh:
          "Researcher: Conduct studies on social problems, policies, and interventions for governmental and non-governmental agencies.",
      },
      BeyondEmpHeading: "Beyond Employment",
      BeyondEmpDesc:
        "The BSW degree from Tribhuvan University also provides a strong foundation for higher studies and independent initiatives:",
      BeyondEmp: {
        first:
          "Higher Education: Pursue master's programs such as MSW, Sociology, Psychology, or Development Studies.",
        second:
          "Entrepreneurship: Establish social enterprises or community-based organizations.",
        third:
          "International Opportunities: Engage in global development programs and humanitarian missions.",
      },
      more: "The BSW program is ideal for individuals passionate about social justice, human rights, and community service. With its balance of academic rigor and hands-on field experience, the program develops compassionate leaders capable of creating lasting social impact.",
      eligibleHeading: "Eligibility Criteria",
      eligibileList: {
        first:
          "Must have completed 10+2 or equivalent (any stream: Management, Science, Humanities, or others) recognized by Tribhuvan University.",
        second:
          "Minimum second division or ‘C’ grade in all subjects under the new grading system.",
        third:
          "Must pass the entrance examination conducted by the TU-affiliated college or campus.",
        fourth:
          "Must have studied English as a full paper (compulsory) in +2 or equivalent level.",
      },
    },
  ];
  const bswHeading = ["Bachelor in Social Work (BSW)"];
  return (
    <>
      <CourceTopBar courceImg={bswImg} courceHeading={bswHeading} />
      {bswData.map((data) => (
        <CourceDescription key={data.id} data={data} />
      ))}
      <ConsultationBanner />
      <Footer />
    </>
  );
};
export default Bsw;
