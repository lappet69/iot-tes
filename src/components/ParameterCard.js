import "./custom.scss";
import Filter from "./Filter";
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import axios from 'axios';
import {IoIosWarning} from 'react-icons/io'


const Card = () => {
  
  
  const dataRedux =  useSelector((state) => state.API.API_DATA);
  
  
  const dispatch = useDispatch();
  const scoreCard = (input) =>
  input > 80 && input <= 100
  ? "yellow"
      : input > 100
      ? "red"
      : "parameter-item";
  const handleClick = (id) => {
    dispatch({ type: "SET_ITEM", payload: dataRedux[id - 1] });
    dispatch({ type: "SET_CHART", payload: {labels: ["13.10", "13.20", "13.30", "13.40", "13.50"],
    type: "",
    datasets: [
      {
        label: "",
        data: [35, 33, dataRedux[id - 1].range, 56, 56, 20, 20, 0],
        fill: true,
        options: {},
        borderColor: "rgb(75, 192, 192)",
        tension: 0.5,
      },
    ],} });
  };
  
  // const getAPI = async()=>{
  //  await axios.get('https:sinabariba-andre.herokuapp.com/api/dummy-data-sparing').then((x)=>{dispatch({ type: "GET_DATA", payload: x.data });})
  // }
 
  useEffect(() => {
    // const interval = setInterval(() => getAPI(), 10000);  
    
    // return () => {
    //   clearInterval(interval);
    // };
    
    
  });
  return (
    <div className="container-parameter">
      <Filter />
      <div className="parameter-card ">
        {dataRedux && dataRedux.map((item) => (
          <button
            className={scoreCard(item.range)}
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <div className="param-1">
              <p className="param-text">{item.parameter}</p>
              <p className="unit-text">Unit {item.unit}</p>
            </div>
            <div className="param-2">
              <p className="range-text">{item.range}</p>
              <p className="satuan-text">{item.satuan} { item.range > 80 && item.range <100 ? <IoIosWarning/> :''} </p>
              
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const ParameterCard = () => {
  return (
    <div className="container">
      <Card />
    </div>
  );
};

export default connect(null, null)(ParameterCard);
