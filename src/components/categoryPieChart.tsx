import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import ResizeWrapper from "./ResizeWrapper";
import React from "react";
import { RootState } from "../store";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const CategoryPieChart = ({
  handleSortingEnable,
}: {
  handleSortingEnable: (state: boolean) => void;
}) => {
  const data = useSelector((state: RootState) => state.chart.pieChartData);

  return (
    <ResizeWrapper
      defaultWidth={450}
      defaultHeight={400}
      onResizeStart={() => handleSortingEnable(false)}
      onResizeStop={() => handleSortingEnable(true)}
    >
      {(width, height) => (
        <>
          <h2 className="text-xl font-semibold mb-4">Category Distribution</h2>
          <PieChart width={width} height={height}>
            <Pie
              data={data}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </>
      )}
    </ResizeWrapper>
  );
};
