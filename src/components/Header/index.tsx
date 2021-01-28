import * as React from 'react';
import { Container } from "react-bootstrap";
import { Navigation } from "../Navigation";
import LogoImage from '../../assets/images/logo.svg';
import './Header.scss';

export const Header = () => {
    return (
        <header className="header-wrapper">
            <Container>
                <div className="header-inner">
                    <a href="#" rel="noopener nofollow">
                        <img src={LogoImage} alt="logo"/>
                    </a>
                    <Navigation/>
                    <button className="contact-button">Contact us</button>
                </div>
            </Container>
        </header>
    );
}