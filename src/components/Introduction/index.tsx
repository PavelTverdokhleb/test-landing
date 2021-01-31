import React, { useCallback } from "react";
import { Container } from "react-bootstrap";
import { INTRODUCTION_FEATURES } from "../../constants/introduction";
import { Separator } from "../Separator";
import { FeatureLabel } from "../FeatureLabel";
import arrowImg from "../../assets/images/arrow.svg";
import "./Introduction.scss";

export const Introduction = () => {
  const onClickForward = useCallback(() => {
    const target = document.getElementById("features");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="introduction-wrapper">
      <Container>
        <h1 className="introduction-title">Cryptocurrency Broker Consulting</h1>
        <Separator />
        <h2 className="introduction-subtitle">
          We help our clients create and improve their crypto offering by
          connecting them to proper resources
        </h2>
        <div className="introduction-features">
          {INTRODUCTION_FEATURES.map(({ id, value }) => (
            <FeatureLabel key={id} value={value} />
          ))}
        </div>
        <button className="introduction-button">
          Set up a free consultation
        </button>
        <button className="move-forward-button" onClick={onClickForward}>
          <img src={arrowImg} alt="arrow" />
        </button>
      </Container>
    </section>
  );
};
