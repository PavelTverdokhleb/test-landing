import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSpring, useTransition, useChain, animated } from "react-spring";
import { NAVIGATION_ITEMS } from "../../constants/navigation";
import "./Navigation.scss";

const DESKTOP_BOUNDARY = 992;
const HEADER_HEIGHT = 115;

const checkIsDesktop = (): boolean => window.innerWidth >= DESKTOP_BOUNDARY;

export const Navigation = () => {
  const [isDesktop, setIsDesktop] = useState(() => checkIsDesktop());
  const [isMenuOpen, setMenuState] = useState(false);

  const navRef = useRef(null);
  const linkRef = useRef(null);
  const contactUsRef = useRef(null);

  const topLineStyle = useSpring({
    transform: isMenuOpen
      ? "translate(0px, 14px) rotate(-45deg)"
      : "translate(0px, 0px) rotate(0deg)",
  });

  const midLineStyle = useSpring({
    opacity: isMenuOpen ? 0 : 1,
  });

  const botLineStyle = useSpring({
    transform: isMenuOpen
      ? "translate(0px, -14px) rotate(45deg)"
      : "translate(0px, 0px) rotate(0deg)",
  });

  const menuStyle = useSpring({
    from: {
      height: 0,
    },
    to: {
      height: isMenuOpen ? window.innerHeight - HEADER_HEIGHT : 0,
    },
    ref: navRef,
  });

  const linkTransitions = useTransition(
    isMenuOpen ? NAVIGATION_ITEMS : [],
    (item) => item.id,
    {
      trail: 400 / NAVIGATION_ITEMS.length,
      from: { opacity: 0, transform: "translateY(-20px)" },
      enter: { opacity: 1, transform: "translateY(0)" },
      leave: { opacity: 0, transform: "translateY(-20px)" },
      ref: linkRef,
    }
  );

  const contactUsStyle = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: {
      opacity: isMenuOpen ? 1 : 0,
      transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)",
    },
    ref: contactUsRef,
  });

  useChain(
    isMenuOpen
      ? [navRef, linkRef, contactUsRef]
      : [contactUsRef, linkRef, navRef],
    [0, 0.3, 0.7]
  );

  const handleResize = useCallback(() => {
    const isResizedDesktop = checkIsDesktop();
    setIsDesktop(isResizedDesktop);
    if (isResizedDesktop) {
      setMenuState(false);
    }
  }, [setIsDesktop]);

  const handleBurgerClick = () => {
    setMenuState(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const contactButton = <button className="contact-button">Contact us</button>;

  if (isDesktop) {
    return (
      <>
        <ul className="navigation">
          {NAVIGATION_ITEMS.map(({ id, title, classes }) => (
            <li key={id}>
              <a className={classes} href="#" rel="noopener noreferer">
                {title}
              </a>
            </li>
          ))}
        </ul>
        {contactButton}
      </>
    );
  }
  return (
    <>
      <button className="burger-button" onClick={handleBurgerClick}>
        <animated.span style={topLineStyle} />
        <animated.span style={midLineStyle} />
        <animated.span style={botLineStyle} />
      </button>
      <animated.div className="navigation-mobile" style={menuStyle}>
        <ul className="navigation">
          {linkTransitions.map(({ item: { title, classes }, key, props }) => (
            <animated.li key={key} style={props}>
              <a className={classes} href="#" rel="noopener noreferer">
                {title}
              </a>
            </animated.li>
          ))}
          <animated.li style={contactUsStyle}>{contactButton}</animated.li>
        </ul>
      </animated.div>
    </>
  );
};
