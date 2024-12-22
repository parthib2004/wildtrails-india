import React from "react";
import { Routes, Route } from "react-router-dom";
import MapView from "./components/MapView";
import LocationDetail from "./components/LocationDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MapView />} />
      <Route path="/location/:name" element={<LocationDetail />} />
    </Routes>
  );
};

export default App;
