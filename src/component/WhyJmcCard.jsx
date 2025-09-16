const WhyJmcCard = ({ item }) => {
  return (
    <div
      className="p-4  pb-5 pt-4 d-flex flex-column bg-white shadow-lg custom-whyjmc-card"
      style={{
        width: "262px",
        height: "250px",
        borderTopRightRadius: "12px",
        borderBottomLeftRadius: "12px",
      }}
    >
      <span>
        <img
          className="rounded-circle"
          style={{
            marginLeft: "4rem",
            marginTop: "2rem",
            maxWidth: "100%",
            maxHeight: "120px",
            objectFit: "cover",
          }}
          src={item.image}
          alt=""
        />
      </span>
      <span className="fs-5 mt-3 fw-bold text-center">{item.title}</span>
    </div>
  );
};
export default WhyJmcCard;
