import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

interface DraggableWrapperProps {
  id: string;
  isSortingDisabled: boolean;
  children: React.ReactNode;
}

const DragWrapper = ({
  id,
  isSortingDisabled,
  children,
}: DraggableWrapperProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id, disabled: isSortingDisabled });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(isSortingDisabled ? {} : { ...attributes, ...listeners })}
    >
      {children}
    </div>
  );
};

export default DragWrapper;
