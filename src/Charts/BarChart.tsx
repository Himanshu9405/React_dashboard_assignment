import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { BarChart, Bar } from "recharts";

const exportToCsv = (data: {month: string, targets: number, actuals: number}[]) => {
  const headers = "Month,Target Value, Actual Value\n";
  const rows = data
    .map((row: {month: string, targets: number, actuals: number}) => `${row.month},${row.targets},${row.actuals}`)
    .join("\n");

  const csvContent = headers + rows;

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "targets-actuals.csv";
  a.click();
  URL.revokeObjectURL(url);
};

const Barchart = () => {
  // Sample data
  const data = [
    {
      month: "Jan",
      targets: 4000,
      actuals: 2400,
    },
    {
      month: "Feb",
      targets: 3000,
      actuals: 1398,
    },
    {
      month: "Mar",
      targets: 2000,
      actuals: 9800,
    },
    {
      month: "Apr",
      targets: 2780,
      actuals: 3908,
    },
    {
      month: "May",
      targets: 1890,
      actuals: 4800,
    },
    {
      month: "Jun",
      targets: 2390,
      actuals: 3800,
    },
    {
      month: "Jul",
      targets: 3490,
      actuals: 4300,
    },
  ];

  return (
    <>
      <div className="flex flex-row-reverse mb-2">
        <button className="font-bold h-[2rem] w-[6rem] bg-gray-700 text-white dark:bg-white dark:text-gray-700" onClick={() => exportToCsv(data)}>
          Export
        </button>
      </div>
      <div className="w-full h-64 ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="targets" fill="#82ca9d" />
            <Bar dataKey="actuals" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Barchart;
