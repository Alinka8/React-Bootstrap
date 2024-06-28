import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css"; // Import the CSS file for additional styles

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Brand href="/">E-commerce</Navbar.Brand>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink
            to="/"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/customers"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            Customers
          </NavLink>
          <NavLink
            to="/products"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            Products
          </NavLink>
          <NavLink
            to="/orders"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            Orders
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
