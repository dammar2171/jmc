const PageTop = ({ Banner }) => {
  return (
    <div className="container-fluid m-0 p-0 page-top-container">
      <img
        src={Banner}
        alt=""
        className="eventTop-image shadow-lg m-0 p-0 img-fluid"
      />
    </div>
  );
};

export default PageTop;
