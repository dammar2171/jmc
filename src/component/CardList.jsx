import Card from "./Card";

const CardList = ({ courceData }) => {
  return (
    <div className="card-list d-flex ">
      {courceData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};
export default CardList;
