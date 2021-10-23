import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Layout } from '../Layout/Layout';
import './Profile.css';

export const Profile = () => {
    return (
        <>
            <Layout
                title="Welcome to Click to Cart"
                description="Click to Cart is a E-Commerce Website, From Where you can buy any daily life product for your-self."
                src="/images/shopping-basket.png"

            >
                <section className="profileSection">
                    <Container>
                        <Row>
                            <Col md={7} className="centerPosition">
                                <Row className="profile">
                                    <Col md={12} className="profileImg">
                                        <img src="https://img.freepik.com/free-photo/close-up-photo-young-successful-business-man-black-suit_171337-9509.jpg?size=626&ext=jpg" alt="Profile" />
                                    </Col>
                                    <Col md={12}>
                                        <div className="profileInfo">

                                            <h1>Name: Anika Ahammed</h1>
                                            <p>Email: anika@gmail.com</p>
                                            <p>Phone: 01954111469</p>
                                            <p>Phone Extra: 01632663430</p>
                                            <p>Blood Group: A+</p>
                                            <p>Gender: Female</p>
                                            <p>Address: Narayanganj,Bangladesh</p>
                                            <p>Thana: Signboard</p>
                                            <p>District: Narayanganj</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </>
    )
}
