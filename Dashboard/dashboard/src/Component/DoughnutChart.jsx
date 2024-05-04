import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Title from "./Title";

const data = [
  { name: "Income", value: 150020 },
  { name: "Expense", value: 50010 },
  { name: "Savings", value: 80000 },
  { name: "Tax", value: 20010 },
];

const COLORS = ["#0088FE", "#FFBB28", "#FF8042", "#00C49F"];

const DoughnutChart = () => {
  return (
    <div className="w-full md:w-1/3 flex flex-col items-center bg-gray-50 dark:bg-transparent">
      <Title title={"Summary"} />

      <ResponsiveContainer width={"100%"} height={500}>
        <PieChart width={500} height={400}>
          <Tooltip></Tooltip>
          <Legend></Legend>
          <Pie
            data={data}
            innerRadius={110}
            outerRadius={170}
            fill="#8884d8"
            paddingAngle={5}
            dataKey={"value"}
          >
            {data.map((e, index) => {
              return (
                <Cell
                  key={"cell" + index}
                  fill={COLORS[index % COLORS.length]}
                />
              );
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoughnutChart;
