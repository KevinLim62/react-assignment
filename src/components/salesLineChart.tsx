import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import ResizeWrapper from "./ResizeWrapper";
import React from "react";
import { RootState } from "../store";

export const SalesLineChart = ({
  isResizeEnable,
}: {
  isResizeEnable: boolean;
}) => {
  const data = useSelector((state: RootState) => state.chart.lineChartData);

  return (
    <ResizeWrapper
      defaultWidth={600}
      defaultHeight={400}
      resizeEnable={isResizeEnable}
    >
      {(width, height) => (
        <>
          <h2 className="text-xl font-semibold mb-4">Monthly Performance</h2>
          <LineChart width={width} height={height} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            <Line type="monotone" dataKey="profit" stroke="#ffc658" />
          </LineChart>
        </>
      )}
    </ResizeWrapper>
  );
};
