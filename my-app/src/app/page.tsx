"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import { Facebook, Twitter, Pinterest, Instagram, HouseFill, Search, PersonFill, Cart } from "react-bootstrap-icons";

// 1. Social media and account/cart menu, based on the original Bootstrap version.
const TopMenu = () => (
  <Navbar className="topbar py-0" bg="light">
    <Container className="topbar-inner d-flex justify-content-between align-items-center">
      <Nav className="align-items-center social-menu flex-row">
        <Nav.Link href="#" aria-label="Facebook"><Facebook /></Nav.Link>
        <Nav.Link href="#" aria-label="Twitter"><Twitter /></Nav.Link>
        <Nav.Link href="#" aria-label="Pinterest"><Pinterest /></Nav.Link>
        <Nav.Link href="#" aria-label="Instagram"><Instagram /></Nav.Link>
      </Nav>
      <Nav className="align-items-center account-menu flex-row">
        <Nav.Link href="#" aria-label="Home"><HouseFill /></Nav.Link>
        <Nav.Link href="#" aria-label="Search"><Search /></Nav.Link>
        <Nav.Link href="#" aria-label="Account"><PersonFill /></Nav.Link>
        <NavDropdown align="end" title={<><Cart /> <span className="cart-count">0</span></>} id="cart-menu">
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

// 2. Use the logo image from the previous Island Snow Bootstrap assignment.
const IslandSnowLogo = () => (
  <div className="logo-section text-center">
    <Image src="/islandsnow-logo.png" alt="Island Snow logo" width={215} height={38} priority />
  </div>
);

// 3. React Bootstrap navigation replaces the original plain HTML menu.
const MiddleMenu = () => (
  <Navbar className="middlebar" expand="sm">
    <Container className="justify-content-center">
      <Nav className="middle-links flex-row flex-wrap justify-content-center">
        <Nav.Link href="#men">MEN</Nav.Link>
        <Nav.Link href="#women">WOMEN</Nav.Link>
        <Nav.Link href="#kids">KIDS</Nav.Link>
        <Nav.Link href="#brands">BRANDS</Nav.Link>
        <Nav.Link href="#search">SEARCH</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

// 4. Original hero image, rendered at responsive width.
const FullWidthImage = () => (
  <div className="hero-image">
    <Image src="/islandsnow-main.png" alt="Island Snow storefront and merchandise" width={785} height={327} sizes="(max-width: 800px) 100vw, 785px" priority className="img-fluid" />
  </div>
);

// 5. Three-column footer.
const FooterMenu = () => (
  <footer className="footer-menu">
    <Row className="text-center gy-3">
      <Col xs={12} md={4}><a href="#navigation">NAVIGATION</a></Col>
      <Col xs={12} md={4}><a href="#links">MAIN MENU</a></Col>
      <Col xs={12} md={4}><a href="#connect">CONNECT</a></Col>
    </Row>
  </footer>
);

export default function Home() {
  return (
    <main>
      <TopMenu />
      <Container className="site-content px-0">
        <IslandSnowLogo />
        <MiddleMenu />
        <FullWidthImage />
        <FooterMenu />
      </Container>
    </main>
  );
}
