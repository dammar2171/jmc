const CourceTopBar = ({ courceImg, courceHeading }) => {
  return (
    <div className="container-fluid cource-top-bar p-0 m-0">
      <img src={courceImg} className="shadow-lg" alt="" />
      <div className="cource-overlay">
        <h2 className="mb-0 text-center mt-4">{courceHeading}</h2>
      </div>
    </div>
  );
};
export default CourceTopBar;
