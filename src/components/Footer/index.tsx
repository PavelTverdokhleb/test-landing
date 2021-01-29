import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Logo, LogoType } from "../Logo";
import "./Footer.scss";
import { Social } from "../Social";
import { Navigation } from "../Navigation";

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={{ order: 1, span: 6 }} lg={3}>
            <div className="footer-logo-section">
              <div>
                <Logo type={LogoType.white} />
                <p>© Copyright 2021</p>
              </div>
              <div className="company-policies">
                <a href="#" rel="noopener nofollow">
                  Terms of Service
                </a>
                <a href="#" rel="noopener nofollow">
                  Privacy Policy
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={{ order: 3, span: 6 }} lg={3}>
            <h5 className="footer-section-title">Site Navigation</h5>
            <ul className="footer-navigation">
              <li>
                <a href="#" rel="noopener noreferer">
                  Home
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferer">
                  Services
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferer">
                  Clients
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferer">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferer">
                  Partner
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferer">
                  Blog
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={{ order: 4, span: 6 }} lg={3}>
            <h5 className="footer-section-title">Contact Us</h5>
            <p className="address">
              CD PROJEKT S.A. ul. Jagiellonska 74 03-301 Warszawa
            </p>
          </Col>
          <Col xs={12} sm={12} md={{ order: 2, span: 6 }} lg={3}>
            <Social />
            <div className="contacts">
              <a href="tel:+1-234-567-8900">+1-234-567-8900</a>
              <a href="mailto:info@mylogo.com">info@mylogo.com</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
