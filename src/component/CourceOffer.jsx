import CardList from "./CardList";
import bca from "../assets/bca.jpg";
import bbs from "../assets/BBS.jpeg";
import bsw from "../assets/BSW.jpg";
const CourceOffer = () => {
  const courceData = [
    {
      id: 1,
      link: "/courses/bca",
      image: bca,
      title: "Bachelor in Computer Application (BCA)",
    },
    {
      id: 2,
      link: "/courses/bbs",
      image: bbs,
      title: "Bachelor in Business Studies (BBS)",
    },
    {
      id: 3,
      link: "/courses/bsw",
      image: bsw,
      title: "Bachelor in Social Work (BSW)",
    },
  ];
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div>
            <h1 className="text-center mb-2 fs-4">Cource We Offer</h1>
            <p className="text-center mb-5 fs-5">
              Janjyoti Multiple Campus Offers Students With the Following
              Courses
            </p>
            <CardList courceData={courceData} />
          </div>
        </div>
      </div>
    </>
  );
};
export default CourceOffer;
