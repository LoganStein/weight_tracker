import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import "./css/main.css";

function Chart(props) {
  //data is going to need to be parsed so that each item is state.weights[1] state.dates[1] and so on
  // some how we need to get state from input...
  // let displayData = [
  //   { weight: 125, date: "1/2/2020" },
  //   { weight: 130, date: "1/20/2020" },
  //   { weight: 142, date: "2/10/2020" },
  //   { weight: 140, date: "2/30/2020" },
  // ];
  let data = props.data; //data from the state in input

  /*
    for each index in data.dates
      displayData[index].date = data.dates[index]
      displayData[index].weight = data.weights[index]
  */

  let displayData = []; //data that will eventually be displayed in chart

  for (var i = 0; i < data.dates.length; i++) {
    let temp = { date: data.dates[i], weight: data.weights[i] };
    displayData.push(temp);
  }

  // console.log(displayData);

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={displayData}
          margin={{ top: 20, right: 20, bottom: 0, left: 0 }}
        >
          <Tooltip />
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Legend />
          <Line type="monotone" dataKey="weight" stroke="#58bfc7" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
