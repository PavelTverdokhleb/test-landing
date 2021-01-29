import React, { useState, useEffect, useCallback } from "react";
import "./Navigation.scss";

const DESKTOP_BOUNDARY = 992;

const checkIsDesktop = (): boolean => {
  console.log(window.innerWidth);
  return window.innerWidth >= DESKTOP_BOUNDARY;
};

export const Navigation = () => {
  const [isDesktop, setIsDesktop] = useState(() => checkIsDesktop());
  const [isMenuOpen, setMenu] = useState(() => !isDesktop);

  const handleResize = useCallback(() => {
    const isResizedDesktop = checkIsDesktop();
    console.log(isDesktop, isResizedDesktop);
    if (isDesktop !== isResizedDesktop) {
      setIsDesktop(isResizedDesktop);
    }
  }, [setIsDesktop]);

  const handleBurgerClick = useCallback(() => {
    setMenu(!isMenuOpen);
  }, [setMenu]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  if (isDesktop) {
    return (
      <>
        <ul className="navigation">
          <li>
            <a className="active" href="#" rel="noopener noreferer">
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
        <button className="contact-button">Contact us</button>
      </>
    );
  }
  return <button onClick={handleBurgerClick}>X</button>;
};
