const SCard = ({ item }) => {
  return (
    <div className="card px-2" style={{ width: "18rem" }}>
      <img
        src={item.image}
        className="card-img-top "
        id="fixed-image"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  );
};
export default SCard;
