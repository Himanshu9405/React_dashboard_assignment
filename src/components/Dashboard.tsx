import React from "react";
import KPICard from "./Card.tsx";
import data from "../utils/kpiCard.tsx";
import Linechart from "../Charts/LineChart.tsx";
import Barchart from "../Charts/BarChart.tsx";
import Piechart from "../Charts/PieChart.tsx";

const Dashboard = () => {
  return (
    <div className="mt-[4rem] w-full h-full">
      <h1 className="text-2xl font-bold p-4">Dashboard</h1>

      {/* KPI Cards */}
      <div>
        <KPICard data={data} />
      </div>

      {/* Charts in Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto py-5 px-4 lg:px-2">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <Linechart />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <Barchart />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <Piechart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
