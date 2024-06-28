// src/components/NotFound.jsx
import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import notFoundImage from "../NotFound/not-found.jpeg"; // Replace with an appropriate image

const NotFound = () => {
  return (
    <Container className="not-found-page text-center">
      <Row className="align-items-center">
        <Col md={6}>
          <Image src={notFoundImage} fluid />
        </Col>
        <Col md={6}>
          <h1>404 - Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <NavLink to="/" className="btn btn-primary">
            Go to Home
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
