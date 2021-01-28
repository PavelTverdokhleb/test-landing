import * as React from 'react';
import './Navigation.scss';

export const Navigation = () => {
    return (
        <ul className="navigation">
            <li><a className="active" href="#" rel="noopener noreferer">Home</a></li>
            <li><a href="#" rel="noopener noreferer">Services</a></li>
            <li><a href="#" rel="noopener noreferer">Clients</a></li>
            <li><a href="#" rel="noopener noreferer">Why Us</a></li>
            <li><a href="#" rel="noopener noreferer">Partner</a></li>
            <li><a href="#" rel="noopener noreferer">Blog</a></li>
        </ul>
    );
}