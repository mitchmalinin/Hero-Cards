import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #2d2d31;
    box-shadow: 0px 1px 7px 8px #13131354;
  }

  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #fff !important;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #1ab1f3 !important;
    }
  }
`;

const NavigationBar = (props) => {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand>Super Hero Cards</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/my-heros">My Heros</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
