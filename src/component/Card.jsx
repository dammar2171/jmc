import { FaLongArrowAltRight } from "react-icons/fa";
const Card = ({ item }) => {
  return (
    <div className="card custom-card" style={{ width: "18rem" }}>
      <img src={item.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <a href="#">
          <span className="pe-2">Read More</span>
          <FaLongArrowAltRight />
        </a>
      </div>
    </div>
  );
};
export default Card;
