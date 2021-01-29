import * as React from "react";
import { Container } from "react-bootstrap";
import { Logo, LogoType } from "../Logo";
import { Navigation } from "../Navigation";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header-wrapper">
      <Container>
        <div className="header-inner">
          <Logo type={LogoType.dark} />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};
