import React from "react";
import PieChart from "react-js-pie-chart";

const data = [
    { value: 30, name: "Hybrid" },
    { value: 30, name: "Onsite" },
    { value: 40, name: "Remote" },
  ];
function Piechart() {
  return (
    <PieChart
      data={data}
      width={50}
      height={50}
      thickness={70}
      colors={[  "#00bc6f","#f5b944","#8e00f8",]}
      legendPosition=""
    />
  );
}

export default Piechart;
