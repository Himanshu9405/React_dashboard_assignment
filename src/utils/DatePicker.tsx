import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangeSelector = () => {
  const [startDate, setStartDate] = useState<Date | null |undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | null |undefined>(undefined);

  const customHeader = ({ date, decreaseMonth, increaseMonth }) => (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
      <button onClick={decreaseMonth} className="text-gray-600">
        &lt;
      </button>
      <span className="text-sm font-medium text-gray-800">
        {date.toLocaleString("default", { month: "long", year: "numeric" })}
      </span>
      <button onClick={increaseMonth} className="text-gray-600">
        &gt;
      </button>
    </div>
  );

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select start date"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:text-gray-700"
            renderCustomHeader={customHeader}
            icon={undefined}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            End Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate as Date | undefined}
            placeholderText="Select end date"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:text-gray-700"
            renderCustomHeader={customHeader}
            icon={undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangeSelector;
