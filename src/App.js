import "./App.scss";
import Layout from "./components/Layout";
import LogSummary from "./components/LogSummary";
import Navlink from "./components/Navlink";
import Diagram from "./components/Diagram";
import ParameterCard from "./components/ParameterCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios'

function App() {
  const dispatch = useDispatch();
  const getAPI = async () => {
    await axios
      .get("https:sinabariba-andre.herokuapp.com/api/dummy-data-sparing")
      .then((x) => {
        dispatch({ type: "GET_DATA", payload: x.data });
      });
  };
  useEffect(() => {
    const interval = setInterval(() => getAPI(), 10000);

    dispatch({
      type: "SET_CHART",
      payload: {
        labels: ["13.10", "13.20", "13.30", "13.40", "13.50"],
        type: "",
        datasets: [
          {
            label: "",
            data: [35, 33, Math.floor(Math.random() * 200), 56, 56, 20, 20, 0],
            fill: true,
            options: {},
            borderColor: "rgb(75, 192, 192)",
            tension: 0.5,
          },
        ],
      },
    });

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <Layout className="layout">
      <Navlink />
      <div className="content-wrapper ">
        <LogSummary />
        <Diagram />
      </div>
      <ParameterCard />
    </Layout>
  );
}

export default App;
