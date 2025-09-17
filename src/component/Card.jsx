import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div
      className="card custom-card"
      style={{ width: "18rem", maxWidth: "100%" }}
    >
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <Link
          to={item.link}
          className="text-decoration-none d-flex align-items-center"
        >
          Read More <FaLongArrowAltRight className="ms-2" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
