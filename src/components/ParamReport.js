import "./custom.scss";
import { useSelector } from "react-redux";

const ParamReport = () => {
  const data = useSelector((state) => state.API.reduxState);

  return (
    <div className="diagram-parameter">
      <p className="param-text">{data.parameter}</p>
      <p className="range-text">{data.range}</p>
      <div className="diagram-report">
        <p>Unit ID </p>
        <p className="value">{data.unit}</p>
      </div>
      <div className="diagram-report">
        <p>Device ID </p>
        <p className="value">SW-02</p>
      </div>
      <div className="diagram-report min-max">
        <p>Min </p>
        <p className="value">4</p>
      </div>
      <div className="diagram-report">
        <p>Max </p>
        <p className="value">9</p>
      </div>
      <div className="diagram-report ">
        <p>Median </p>
        <p className="value">6.8</p>
      </div>
    </div>
  );
};

export default ParamReport;
