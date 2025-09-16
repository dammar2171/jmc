import CourceTab from "./CourceTab";
import { IoArrowRedoSharp } from "react-icons/io5";
const CourceDescription = ({ data }) => {
  return (
    <div className="container-fluid py-5 courceDecription">
      <div className="container pt-5">
        <h3 style={{ color: "#3786cf" }}>{data.title}</h3>
        <p className="lead fs-6">{data.description}</p>
        <h4 style={{ color: "#3786cf" }}>{data.careerOputunitiesHeading}</h4>
        <ul>
          <li className="lead fs-6">
            <IoArrowRedoSharp />
            {data.careerOputunities.first}
          </li>
          <li className="lead fs-6">
            <IoArrowRedoSharp />
            {data.careerOputunities.second}
          </li>
          <li className="lead fs-6">
            <IoArrowRedoSharp />
            {data.careerOputunities.third}
          </li>
          <li className="lead fs-6">
            <IoArrowRedoSharp />
            {data.careerOputunities.fourth}
          </li>
          <li className="lead fs-6">
            <IoArrowRedoSharp />
            {data.careerOputunities.fifth}
          </li>
          <li className="lead fs-6">
            <IoArrowRedoSharp />
            {data.careerOputunities.sixth}
          </li>
          <li className="lead fs-6">
            <IoArrowRedoSharp />
            {data.careerOputunities.seventh}
          </li>
        </ul>
        <h4 style={{ color: "#3786cf" }}>{data.BeyondEmpHeading}</h4>
        <p className="lead fs-6">{data.BeyondEmpDesc}</p>
        <ul>
          <li className="lead fs-6">
            <IoArrowRedoSharp />
            {data.BeyondEmp.first}
          </li>
          <li className="lead fs-6">
            <IoArrowRedoSharp />
            {data.BeyondEmp.second}
          </li>
          <li className="lead fs-6">
            <IoArrowRedoSharp />
            {data.BeyondEmp.third}
          </li>
        </ul>
        <p className="lead fs-6">{data.more}</p>
        {data.special === "bca" && <CourceTab />}
        <h4 style={{ color: "#3786cf" }}>{data.eligibleHeading}</h4>
        <ul>
          <li className="lead fs-6">
            <IoArrowRedoSharp />
            {data.eligibileList.first}
          </li>
          <li className="lead fs-6">
            <IoArrowRedoSharp />
            {data.eligibileList.second}
          </li>
          <li className="lead fs-6">
            <IoArrowRedoSharp />
            {data.eligibileList.third}
          </li>
          <li className="lead fs-6">
            <IoArrowRedoSharp />
            {data.eligibileList.fourth}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CourceDescription;
