import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <>
      <section className="navigation">
        <Navbar fixed="top" expand="lg">
          <Navbar.Brand href="#">Emergency</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ marginLeft: "auto" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="profile">Profile</Nav.Link>
              <Nav.Link href="/Category">My Service</Nav.Link>
              <Nav.Link href="/PoliceStation">Police Stations</Nav.Link>
              <Nav.Link href="/FireService">Fire Services</Nav.Link>
              <Nav.Link href="/services">Get Services</Nav.Link>
              <Nav.Link href="/admin/login">Admin</Nav.Link>
              <Nav.Link href="/SignIn">Sign In</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </>
  );
};
