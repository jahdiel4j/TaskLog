
import React, { useState, useCallback } from "react";
import { BarChart, Bar, Cell, XAxis, Label, YAxis, Tooltip } from "recharts";

export default function App({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = useCallback(
    (entry: any, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div>
      <BarChart 
        width={500} 
        height={230} 
        data={data}
        margin={{ top:10, right: 20, left:20, bottom: 40}}
        >
          <XAxis dataKey="name">
              <Label value="Task" position="bottom" offset={0}/>
          </XAxis>
          <YAxis label={{ value: 'Seconds', angle: -90, position: 'insideLeft' }} />
          <Tooltip/>
        <Bar dataKey="Seconds" onClick={handleClick}>
          {data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}