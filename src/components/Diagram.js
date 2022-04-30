/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import LineChart from "./chart/LineChart";
import ParamReport from "./ParamReport";
import "./custom.scss";
import { useSelector } from "react-redux";

const Diagram = () => {
  const data = useSelector((state) => state.API.CHART);

  return (
    <div className="diagram-box">
      <ParamReport />
      <div className="diagram-content">
        <LineChart chartData={data} />
      </div>
    </div>
  );
};

export default Diagram;
