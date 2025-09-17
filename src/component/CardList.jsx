import Card from "./Card";

const CardList = ({ courceData }) => {
  return (
    <div className="row g-4 justify-content-center">
      {courceData.map((item) => (
        <div
          key={item.id}
          className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
        >
          <Card item={item} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
