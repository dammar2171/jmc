import WhyJmcCard from "./WhyJmcCard";
import img1 from "../assets/i3.png";
import img2 from "../assets/i4.png";
import img3 from "../assets/i1.png";
import img4 from "../assets/i2.png";

const WhyJmc = () => {
  const whyJmcData = [
    { id: 1, image: img1, title: "Carrier Guidance" },
    { id: 2, image: img2, title: "Good Learning Environment" },
    { id: 3, image: img3, title: "Experienced Teachers" },
    { id: 4, image: img4, title: "Competent Graduates" },
  ];

  return (
    <div className="container-fluid py-4">
      <div className="container">
        <div className="row justify-content-center">
          {whyJmcData.map((item) => (
            <div
              key={item.id}
              className="col-12 col-sm-6 col-md-3 d-flex justify-content-center mb-4"
            >
              <WhyJmcCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyJmc;
