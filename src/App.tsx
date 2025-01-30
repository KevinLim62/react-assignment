import React, { useState } from "react";

import { SalesLineChart } from "./components/salesLineChart.tsx";
import { SalesBarChart } from "./components/salesBarChart.tsx";
import { CategoryPieChart } from "./components/categoryPieChart.tsx";
import { UsersTable, ProductsTable } from "./components/usersTable.tsx";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
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

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      const newItems = [...items];
      newItems.splice(oldIndex, 1);
      newItems.splice(newIndex, 0, active.id);
      setItems(newItems);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="min-h-screen w-full bg-gray-100 p-8">
          <h1 className="text-3xl font-bold mb-8">
            Sample Dashboard with Resize & Reposition
          </h1>
          <button
            className=""
            onClick={() => setIsSortingEnable(!isSortingEnable)}
          >
            Reposition
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
                {id === "SalesLineChart" && (
                  <SalesLineChart
                    handleSortingEnable={() => setIsSortingEnable(false)}
                  />
                )}
                {id === "CategoryPieChart" && (
                  <CategoryPieChart
                    handleSortingEnable={() => setIsSortingEnable(false)}
                  />
                )}
                {id === "SalesBarChart" && (
                  <SalesBarChart
                    handleSortingEnable={() => setIsSortingEnable(false)}
                  />
                )}
                {id === "UsersTable" && (
                  <UsersTable
                    handleSortingEnable={() => setIsSortingEnable(false)}
                  />
                )}
                {id === "ProductsTable" && (
                  <ProductsTable
                    handleSortingEnable={() => setIsSortingEnable(false)}
                  />
                )}
              </DragWrapper>
            ))}
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
}
