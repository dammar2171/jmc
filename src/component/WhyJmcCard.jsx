const WhyJmcCard = ({ item }) => {
  return (
    <div
      className="p-4 pb-4 pt-5 d-flex flex-column bg-white shadow-lg custom-whyjmc-card"
      style={{
        width: "262px",
        height: "250px",
        borderTopRightRadius: "12px",
        borderBottomLeftRadius: "12px",
      }}
    >
      <span className="d-flex justify-content-center">
        <img
          className="rounded-circle"
          src={item.image}
          alt={item.title}
          style={{
            maxWidth: "100%",
            maxHeight: "120px",
            objectFit: "cover",
          }}
        />
      </span>
      <span className="fs-5 mt-3 fw-bold text-center">{item.title}</span>
    </div>
  );
};

export default WhyJmcCard;
