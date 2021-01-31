import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Logo, LogoType } from "../Logo";
import { Social } from "../Social";
import { NAVIGATION_ITEMS } from "../../constants/navigation";
import { CONTACTS, ContactItem } from "../../constants/contacts";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={{ order: 1, span: 6 }} lg={3}>
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
          <Col
            xs={12}
            sm={{ order: 2, span: 6 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 2, span: 3 }}
          >
            <div className="footer-navigation-wrapper">
              <h5 className="footer-section-title">Site Navigation</h5>
              <ul className="footer-navigation">
                {NAVIGATION_ITEMS.map(({ id, title }) => (
                  <li key={id}>
                    <a href="#" rel="noopener noreferer">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col
            xs={12}
            sm={{ order: 4, span: 6 }}
            md={{ order: 4, span: 6 }}
            lg={{ order: 3, span: 3 }}
          >
            <div className="contact-us">
              <h5 className="footer-section-title">Contact Us</h5>
              <p className="address">
                CD PROJEKT S.A. ul. Jagiellonska 74 03-301 Warszawa
              </p>
            </div>
          </Col>
          <Col
            xs={12}
            sm={{ order: 3, span: 6 }}
            md={{ order: 3, span: 6 }}
            lg={{ order: 4, span: 3 }}
          >
            <Social />
            <div className="contacts">
              <a href={`tel:${CONTACTS[ContactItem.phone]}`}>
                {CONTACTS[ContactItem.phone]}
              </a>
              <a href={`mailto:${CONTACTS[ContactItem.email]}`}>
                {CONTACTS[ContactItem.email]}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
