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

export const SalesBarChart = ({
  handleSortingEnable,
}: {
  handleSortingEnable: (state: boolean) => void;
}) => {
  const data = useSelector((state: RootState) => state.chart.barChartData);

  return (
    <ResizeWrapper
      defaultWidth={600}
      defaultHeight={400}
      onResizeStart={() => handleSortingEnable(false)}
      onResizeStop={() => handleSortingEnable(true)}
    >
      {(width, height) => (
        <>
          <h2 className="text-xl font-semibold mb-4">
            Quarterly Sales Comparison
          </h2>
          <BarChart width={width} height={height} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="online" fill="#8884d8" />
            <Bar dataKey="offline" fill="#82ca9d" />
          </BarChart>
        </>
      )}
    </ResizeWrapper>
  );
};
