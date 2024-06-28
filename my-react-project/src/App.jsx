// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/NotFound/NotFoundPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
