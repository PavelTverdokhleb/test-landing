import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FEATURES } from "../../constants/features";
import { FeatureCard } from "../FeatureCard";
import "./Features.scss";

export const Features = () => (
  <section id="features" className="features-wrapper">
    <Container>
      <Row>
        {FEATURES.map(({ id, ...rest }) => (
          <Col xs={12} sm md={4} lg={4} key={id}>
            <FeatureCard {...rest} />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);
