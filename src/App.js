import "./App.scss";
import Layout from "./components/Layout";
import LogSummary from "./components/LogSummary";
import Navlink from "./components/Navlink";
import Diagram from "./components/Diagram";
import ParameterCard from "./components/ParameterCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    

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
