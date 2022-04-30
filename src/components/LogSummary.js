import React from "react";
import "./custom.scss";

const LogSummary = () => {
  const date = new Date("4-27-2022 9:42:48 AM UTC");
  return (
    <div className="log ">
      <div className="box">
        <p>Last Update</p>
        <p>{date.toLocaleString()}</p>
      </div>
      <div className="box">
        <p>Log Summary</p>
        <h3>Last 24 Hours</h3>
      </div>
      <div className="box">
        <h3>Data Transfer</h3>
        <div>
        <p>Error</p>
        <p>2</p>
        </div>
        <div>
        <p>Warning</p>
        <p>0</p>
        </div>
      </div>
      <div className="box">
        <h3>Measurement</h3>
        <div>
        <p>Error</p>
        <p>2</p>
        </div>
        <div>
        <p>Warning</p>
        <p>0</p>
        </div>
      </div>
      <div className="box">
        <h3>Device Health</h3>
        <div>
        <p>Error</p>
        <p>2</p>
        </div>
        <div>
        <p>Warning</p>
        <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default LogSummary;
