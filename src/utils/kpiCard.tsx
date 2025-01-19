import React from "react";
import { FaAngleUp } from "react-icons/fa";

interface KpiCardPropsType {
  title: string;
  percentage: string;
  price: string;
  icon: string;
}

export function KpiCard({
  title,
  percentage,
  price,
  icon,
}: KpiCardPropsType) {
  return (
    <div className="shadow-sm border border-gray-600 !rounded-lg dark:border-gray-300">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="!font-medium !text-xs text-gray-600 dark:text-white">{title}</div>
          <div className="flex items-center gap-1">
            {icon}
            <div className="font-medium !text-xs text">
              {percentage}
            </div>
          </div>
        </div>
        <div color="blue-gray" className="mt-1 font-bold text-2xl">
          {price}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    title: "Revenue",
    percentage: "12%",
    price: "$50,846.90", 
    icon: <FaAngleUp  />,
  },
  {
    title: "Outbound Clicks",
    percentage: "16%",
    price: "10,342",
    icon: <FaAngleUp />,
  },
  {
    title: "Total Audience",
    percentage: "10%",
    price: "19,720",
    icon: <FaAngleUp />,
  },
  {
    title: "Event Count",
    percentage: "10%",
    price: "20,000",
    icon: <FaAngleUp />,
  },
];

export default data;
