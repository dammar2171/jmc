import { FaLongArrowAltRight } from "react-icons/fa";
const EventCard = ({ item }) => {
  return (
    <div className="card h-100 custumEvent-card" style={{ width: "100%" }}>
      <img
        src={item.image}
        className="card-img-top"
        alt="..."
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text flex-grow-1">{item.description}</p>
        <a style={{textDecoration:"none", color:"#3786cf"}} href="#" className="">
          Read More <FaLongArrowAltRight />
        </a>
      </div>
    </div>
  );
};
export default EventCard;
