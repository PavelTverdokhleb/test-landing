import React from "react";
import { SOCIALS } from "./constants";
import "./Social.scss";

export const Social = () => (
  <div className="social">
    {SOCIALS.map(({ id, image, name }) => (
      <a key={id} href="#">
        {image}
      </a>
    ))}
  </div>
);
