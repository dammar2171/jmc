const CourceTopBar = ({ courceImg, courceHeading }) => {
  return (
    <div className="container-fluid cource-top-bar p-0 m-0">
      <img src={courceImg} className="shadow-lg img-fluid" alt="" />
      <div className="cource-overlay text-center">
        <h2 className="mb-0 mt-4">{courceHeading}</h2>
      </div>
    </div>
  );
};

export default CourceTopBar;
