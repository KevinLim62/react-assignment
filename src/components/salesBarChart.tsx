import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import ResizeWrapper from "./ResizeWrapper";
import React from "react";
import { RootState } from "../store";

export const SalesBarChart = ({
  isResizeEnable,
}: {
  isResizeEnable: boolean;
}) => {
  const data = useSelector((state: RootState) => state.chart.barChartData);

  return (
    <ResizeWrapper
      defaultWidth={600}
      defaultHeight={400}
      resizeEnable={isResizeEnable}
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
