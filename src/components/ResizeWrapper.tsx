import { Resizable } from "re-resizable";
import React, { useState } from "react";

interface ResizableChartWrapperProps {
  defaultWidth?: number;
  defaultHeight?: number;
  resizeEnable?: boolean;
  onResizeStart?: () => void;
  onResizeStop?: () => void;
  children: (width?: number, height?: number) => React.ReactNode;
}

const ResizeWrapper = ({
  defaultWidth,
  defaultHeight,
  resizeEnable = true,
  onResizeStart,
  onResizeStop,
  children,
}: ResizableChartWrapperProps) => {
  const [size, setSize] = useState({
    width: defaultWidth ?? "auto",
    height: defaultHeight ?? "auto",
  });

  return (
    <Resizable
      defaultSize={{
        width: size.width,
        height: size.height,
      }}
      onResize={(e, direction, ref) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
      }}
      minHeight={defaultHeight}
      minWidth={defaultWidth}
      onResizeStart={() => onResizeStart && onResizeStart()} // Disable sorting when resizing starts
      onResizeStop={() => onResizeStop && onResizeStop()} // Enable sorting after resizing stops
      enable={{
        top: false,
        right: resizeEnable,
        bottom: resizeEnable,
        left: false,
        bottomRight: resizeEnable,
      }}
      className=" p-4 bg-white rounded-lg shadow-md border-2 border-gray-300"
    >
      {
        typeof size.width === "number" && typeof size.height === "number"
          ? children(size.width * 0.9, size.height * 0.8)
          : children() // Fallback size for auto
      }
    </Resizable>
  );
};

export default ResizeWrapper;
