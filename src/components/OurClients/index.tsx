import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ClientCard } from "./ClientCard";
import { Separator } from "../Separator";
import { CLIENTS } from "./constants";
import "./OurClients.scss";

export const OurClients = () => (
  <section className="our-clients-wrapper">
    <Container>
      <h2 className="our-clients-title">Our Clients</h2>
      <Separator />
      <Row>
        {CLIENTS.map(({ id, ...rest }) => (
          <Col key={id} xs={12} sm={6} md={6} lg={3}>
            <ClientCard {...rest} />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);
