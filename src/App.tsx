import React, { useState } from "react";

import { SalesLineChart } from "./components/salesLineChart.tsx";
import { SalesBarChart } from "./components/salesBarChart.tsx";
import { CategoryPieChart } from "./components/categoryPieChart.tsx";
import { UsersTable, ProductsTable } from "./components/usersTable.tsx";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import DragWrapper from "./components/DragWrapper.tsx";

// Main App Component
export default function App() {
  const [items, setItems] = useState([
    "SalesLineChart",
    "CategoryPieChart",
    "SalesBarChart",
    "UsersTable",
    "ProductsTable",
  ]);
  const [isSortingEnable, setIsSortingEnable] = useState(false);
  const [isResizeEnable, setIsResizeEnable] = useState(true);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setItems((prevItems) => {
      const oldIndex = prevItems.indexOf(active.id as string);
      const newIndex = prevItems.indexOf(over.id as string);
      return arrayMove(prevItems, oldIndex, newIndex);
    });
  };

  const ChartComponentMap: Record<string, JSX.Element> = {
    SalesLineChart: <SalesLineChart isResizeEnable={isResizeEnable} />,
    CategoryPieChart: <CategoryPieChart isResizeEnable={isResizeEnable} />,
    SalesBarChart: <SalesBarChart isResizeEnable={isResizeEnable} />,
    UsersTable: <UsersTable isResizeEnable={isResizeEnable} />,
    ProductsTable: <ProductsTable isResizeEnable={isResizeEnable} />,
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="min-h-screen w-screen bg-gray-100 p-8">
          <h1 className="text-3xl font-bold mb-8">
            Sample Dashboard with Resize & Reposition
          </h1>
          <button
            className=""
            onClick={() => {
              setIsSortingEnable(!isSortingEnable);
              setIsResizeEnable(!isResizeEnable);
            }}
          >
            {isSortingEnable ? "Disable Reposition" : "Enable Reposition"}
          </button>
          {/* Charts Section && Tables Section */}
          <div
            className={`grid grid-cols-1 gap-8 mb-8 ${
              isSortingEnable && "border-2 rounded-2xl"
            } transition-all p-4 mt-4`}
          >
            {items.map((id) => (
              <DragWrapper
                isSortingDisabled={!isSortingEnable}
                key={id}
                id={id}
              >
                {ChartComponentMap[id]}
              </DragWrapper>
            ))}
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
}
