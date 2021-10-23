import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../Layout/Layout";
import "./Services.css";

const Services = () => {
  return (
    <>
      <Layout
        title="Welcome to Click to Cart"
        description="Click to Cart is a E-Commerce Website, From Where you can buy any daily life product for your-self."
        src="/images/shopping-basket.png"
      >
        <section className="serviceSection">
          <Container>
            <Row>
              <Col md={12} className="serviceHeading">
                <h1 className="text-center">Get Services</h1>
              </Col>
              <Col md={6}>
                <div className="card-wrapper">
                  <div className="card">
                    <div class="number-label">
                      <img src={"/images/policeman.png"} alt="Profile" />
                    </div>
                    <div className="ribbon-wrapper">
                      <div className="ribbon">
                        <span>Police</span>
                      </div>
                    </div>
                    <div className="card-inner">
                      <h1>
                        <strong>ID:</strong> 2001
                      </h1>
                      <p>
                        <strong>Email:</strong> anikaahammed2@gmail.com
                      </p>
                      <p>
                        <strong>Phone:</strong> 01935640880
                      </p>
                      <p>
                        <strong>LAT:</strong> 4353465
                      </p>
                      <p>
                        <strong>LNG:</strong> 12344
                      </p>
                      <p>
                        <strong>Address:</strong> 43/2, Shorui Borokoborsthan
                        Road, Bagerhat Sadar, Sadar, Khulna
                      </p>
                      <p>
                        <strong>Added By:</strong> 20001
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="card-wrapper">
                  <div className="card">
                    <div class="number-label">
                      <img src={"/images/ambulance.png"} alt="Profile" />
                    </div>
                    <div className="ribbon-wrapper">
                      <div className="ribbon">
                        <span>Ambulance</span>
                      </div>
                    </div>
                    <div className="card-inner">
                      <h1>
                        <strong>ID:</strong> 2001
                      </h1>
                      <p>
                        <strong>Email:</strong> anikaahammed2@gmail.com
                      </p>
                      <p>
                        <strong>Phone:</strong> 01935640880
                      </p>
                      <p>
                        <strong>LAT:</strong> 4353465
                      </p>
                      <p>
                        <strong>LNG:</strong> 12344
                      </p>
                      <p>
                        <strong>Address:</strong> 43/2, Shorui Borokoborsthan
                        Road, Bagerhat Sadar, Sadar, Khulna
                      </p>
                      <p>
                        <strong>Added By:</strong> 20001
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="card-wrapper">
                  <div className="card">
                    <div class="number-label">
                      <img src={"/images/fireman.png"} alt="Profile" />
                    </div>
                    <div className="ribbon-wrapper">
                      <div className="ribbon">
                        <span>Fire</span>
                      </div>
                    </div>
                    <div className="card-inner">
                      <h1>
                        <strong>ID:</strong> 2001
                      </h1>
                      <p>
                        <strong>Email:</strong> anikaahammed2@gmail.com
                      </p>
                      <p>
                        <strong>Phone:</strong> 01935640880
                      </p>
                      <p>
                        <strong>LAT:</strong> 4353465
                      </p>
                      <p>
                        <strong>LNG:</strong> 12344
                      </p>
                      <p>
                        <strong>Address:</strong> 43/2, Shorui Borokoborsthan
                        Road, Bagerhat Sadar, Sadar, Khulna
                      </p>
                      <p>
                        <strong>Added By:</strong> 20001
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="card-wrapper">
                  <div className="card">
                    <div class="number-label">
                      <img src={"/images/bloodDonation.png"} alt="Profile" />
                    </div>
                    <div className="ribbon-wrapper">
                      <div className="ribbon">
                        <span>Blood</span>
                      </div>
                    </div>
                    <div className="card-inner">
                      <h1>
                        <strong>ID:</strong> 2001
                      </h1>
                      <p>
                        <strong>Email:</strong> anikaahammed2@gmail.com
                      </p>
                      <p>
                        <strong>Phone:</strong> 01935640880
                      </p>
                      <p>
                        <strong>LAT:</strong> 4353465
                      </p>
                      <p>
                        <strong>LNG:</strong> 12344
                      </p>
                      <p>
                        <strong>Address:</strong> 43/2, Shorui Borokoborsthan
                        Road, Bagerhat Sadar, Sadar, Khulna
                      </p>
                      <p>
                        <strong>Added By:</strong> 20001
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default Services;
