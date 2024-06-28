import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/NavBar/NavBar";
import HomePage from "./components/Home/HomePage";
import CustomerList from "./components/CustomerList/CustomerList";
import ProductList from "./components/ProductList/ProductList";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import NotFound from "./components/NotFound/NotFoundPage";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
