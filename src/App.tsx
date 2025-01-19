import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./utils/Loading.tsx";
import Layout from "./common/Layout.tsx";

const LazyDashboard = React.lazy(() => import("./components/Dashboard.tsx"));
const LazySetting = React.lazy(() => import("./components/Settings.tsx"));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LazyDashboard />} />
            <Route path="/setting" element={<LazySetting />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
