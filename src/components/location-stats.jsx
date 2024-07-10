// import React from 'react'


// const LocationStats = ({stats}) => {
//   return (
//     <div>
//     LocationStats
//     </div>
//   )
// }

// export default LocationStats


import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ReferenceDot,
  ReferenceArea,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Location({stats}) {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      <ReferenceLine y={12000} label="12000" ifOverflow="extendDomain" />
      <ReferenceLine
        segment={[
          {
            x: "Page A",
            y: 100,
          },
          {
            x: "Page B",
            y: 15000,
          },
        ]}
        ifOverflow="extendDomain"
      />
      <ReferenceDot x="Page A" y={17000} ifOverflow="discard" />
      <ReferenceArea
        x1="Page D"
        x2="Page E"
        y1={1000}
        y2={17000}
        ifOverflow="visible"
      />
    </LineChart>
  );
}
