import * as React from "react";
import './Features.scss';
import {FEATURES} from "./constants";
import {FeatureCard} from "../FeatureCard";
import {Container, Row, Col} from "react-bootstrap";

export const Features = () => (
    <section id="features" className="features-wrapper">
        <Container>
            <Row>
                {FEATURES.map(({id, ...rest}) => (
                    <Col key={id}>
                        <FeatureCard  {...rest} />
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
)