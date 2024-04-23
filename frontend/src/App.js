import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnalysisPage from "./components/AnalysisPage/AnalysisPage";
import AnalysisDetailPage from "./components/AnalysisDetailPage";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnalysisPage />} />
        <Route path="/analysis-detail" element={<AnalysisDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
