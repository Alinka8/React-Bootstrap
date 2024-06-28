// src/components/Common/HomePage.jsx
import React from "react";
import { Button, Container, Card, Row, Col, Image } from "react-bootstrap";
import welcomeImage from "../Home/welcome.jpeg";
import "./homePage.css";

const HomePage = () => {
  return (
    <Container className="home-page">
      <Image src={welcomeImage} fluid className="mb-4" />
      <h1>Welcome to Our Store</h1>
      <Button variant="primary" className="shop-now-button">
        Shop Now
      </Button>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Featured Product</Card.Title>
              <Card.Text>
                Discover our range of products with amazing features.
              </Card.Text>
              <Button variant="secondary" className="shop-now-button">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Special Offers</Card.Title>
              <Card.Text>
                Check out our special offers and save big on your next purchase.
              </Card.Text>
              <Button variant="secondary" className="shop-now-button">
                View Offers
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
