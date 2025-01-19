import React, { useState } from "react";
import DateRangeSelector from "../utils/DatePicker.tsx";

const Setting = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState("en");

  return (
    <div className="flex items-center h-screen w-full dark:bg-gray-600 dark:text-white ">
      <div className="flex w-full items-center">
        <div className="sm:w-fit md:w-[325px] lg:w-[500px] h-fit mx-auto p-8 bg-white shadow-lg rounded-lg dark:bg-gray-400 dark:text-white  dark:shadow-lg dark:rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Settings
          </h2>

          {/* Change Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2 dark:text-white"
            >
              Change Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter new password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500  dark:text-gray-700"
            />
          </div>

          {/* Enable Notifications */}
          <div className="mb-6">
            <label className="flex items-center text-gray-700 font-medium">
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                className="form-checkbox h-5 w-5 text-indigo-600 dark:text-white"
              />
              <span className="ml-2 dark:text-white">Enable Notifications</span>
            </label>
          </div>

          {/* Language Selection */}
          <div className="mb-6">
            <label
              htmlFor="language"
              className="block text-gray-700 font-medium mb-2 dark:text-white"
            >
              Language
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-700"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>

          <div className="mb-6">
            <DateRangeSelector />
          </div>

          {/* Save Settings Button */}
          <button className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
