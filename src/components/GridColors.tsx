import { Input } from "@heroui/react";
import { useState } from "react";

const GridColors = () => {
  const [numItems, setNumItems] = useState<number>(150);

  const getColorClass = (index: number) => {
    if (index === 0) return "bg-purple-500";
    if (index === numItems - 1) return "bg-primary";
    if (index % 2 === 0) return "bg-success-500";
    if (index % 2 !== 0) return "bg-warning-500";
  };

  return (
    <div>
      <Input
        label="Number of items"
        type="number"
        className="border-3 border-default-200 rounded-medium"
        min="1"
        value={String(numItems)}
        onChange={(e) => setNumItems(Number(e.target.value))}
      />
      <div className="flex gap-1 mt-4 flex-wrap">
        {Array.from({ length: numItems }).map((_, index) => (
          <span
            key={index}
            className={`rounded-xs ${getColorClass(index)} min-w-4 min-h-4`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default GridColors;
