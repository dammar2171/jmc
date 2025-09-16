import SCard from "./SCard";
import puneet from "../assets/staffImage/puneetsir.jpg";
import dilli from "../assets/staffImage/dillisir.jpg";
import principle from "../assets/staffImage/principleSir.jpg";
import dharmananda from "../assets/staffImage/dharmanandsir.jpg";
import surendra from "../assets/staffImage/surendrasir.jpg";
import umesh from "../assets/staffImage/umeshsir.jpg";
import bharat from "../assets/staffImage/bharatsir.jpg";
import yagya from "../assets/staffImage/yagyasir.jpg";
const StaffCard = () => {
  const staffData = [
    {
      id: 1,
      image: principle,
      title: "Prakash Joshi",
      description: "Cheif Sir",
    },
    {
      id: 2,
      image: puneet,
      title: "Punnet Ayer",
      description: "MCA graduates",
    },
    {
      id: 3,
      image: dilli,
      title: "Dilli Raj Joshi",
      description: "MCA graduates",
    },
    {
      id: 4,
      image: umesh,
      title: "Umesh Raj Pant",
      description: "CSIT graduates",
    },
    {
      id: 5,
      image: dharmananda,
      title: "Dharmanand Giri",
      description: "Math graduates",
    },
    {
      id: 6,
      image: bharat,
      title: "Bharat Raj Joshi",
      description: "Administrative Head",
    },
    {
      id: 7,
      image: surendra,
      title: "Surendra Joshi",
      description: "School Principle",
    },
    {
      id: 8,
      image: yagya,
      title: "Yagya Raj Upadhyay",
      description: "Economics Lecturer",
    },
  ];
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <span>Our Invaluable Member </span>
        <h1 className="pb-5" style={{color:"#0a4a85"}}>Visiting Faculty Members</h1>
        <div className="row g-4">
          {staffData.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-3">
              <SCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default StaffCard;
