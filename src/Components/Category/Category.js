import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../Layout/Layout";
import "./Category.css";

export const Category = () => {
  return (
    <>
      <Layout
        title="Welcome to Click to Cart"
        description="Click to Cart is a E-Commerce Website, From Where you can buy any daily life product for your-self."
        src="/images/shopping-basket.png"
      >
        <section className="categorySection">
          <Container>
            <Row>
              <Col md={12}>
                <h1 className="text-center">
                  Emergency Services. Hi Anika
                </h1>
              </Col>

              <Col md={6} className="categoryCard">
                <div class="card">
                  <div class="card__image-container">
                    <img
                      class="card__image"
                      src={"/images/police.jpg"}
                      alt=" "
                    />
                  </div>
                  <svg class="card__svg" viewBox="0 0 800 500">
                    <path
                      d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                      stroke="transparent"
                      fill="#10316b"
                    ></path>
                    <path
                      class="card__line"
                      d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                      stroke="pink"
                      stroke-width="2"
                      fill="transparent"
                    ></path>
                  </svg>

                  <div class="card__content">
                    <h1 class="card__title">Police Station</h1>
                    <p>
                      We believe in providing valuable insights for brands to
                      improve their presence on shelf and to be able to create
                      an impact at every single retailer and store in the
                      region.
                    </p>
                    <Button className="btn">Explore Service</Button>
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
