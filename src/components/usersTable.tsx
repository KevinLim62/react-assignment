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

export const UsersTable = ({
  handleSortingEnable,
}: {
  handleSortingEnable: (state: boolean) => void;
}) => {
  const users = useSelector((state: RootState) => state.table.users);

  return (
    <ResizeWrapper
      onResizeStart={() => handleSortingEnable(false)}
      onResizeStop={() => handleSortingEnable(true)}
    >
      {() => (
        <>
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : user.status === "Inactive"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </ResizeWrapper>
  );
};

export const ProductsTable = ({
  handleSortingEnable,
}: {
  handleSortingEnable: (state: boolean) => void;
}) => {
  const products = useSelector((state: RootState) => state.table.products);

  return (
    <ResizeWrapper
      onResizeStart={() => handleSortingEnable(false)}
      onResizeStop={() => handleSortingEnable(true)}
    >
      {() => (
        <>
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Stock
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ${product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.stock}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </ResizeWrapper>
  );
};
