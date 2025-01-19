import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const exportToCsv = (data: {month: string, revenue: number}[]) => {
  const headers = "Month,Revenue\n";
  const rows = data
    .map((row: {month: string, revenue: number}) => `${row.month},${row.revenue}`)
    .join("\n");

  const csvContent = headers + rows;

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "revenue-data.csv";
  a.click();
  URL.revokeObjectURL(url);
};

const Linechart = () => {
  // Sample data
  const revenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 2000 },
    { month: "Apr", revenue: 2780 },
    { month: "May", revenue: 1890 },
    { month: "Jun", revenue: 2390 },
    { month: "Jul", revenue: 3490 },
  ];

  const CustomTooltip = ({ payload, label }) => {
    if ( payload && payload.length) {
      return (
        <div
          className={`p-2 rounded shadow-md bg-gray-700 text-white dark:bg-white dark:text-gray-700 `}
        >
          <p className="font-bold">{label}</p>
          <p>Revenue: ${payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
    <div className="flex flex-row-reverse mb-2">
        <button className="font-bold h-[2rem] w-[6rem] bg-gray-700 text-white dark:bg-white dark:text-gray-700" onClick={() => exportToCsv(revenueData)}>
          Export
        </button>
      </div>
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={<CustomTooltip payload={undefined} label={undefined} />} />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  );
};

export default Linechart;
