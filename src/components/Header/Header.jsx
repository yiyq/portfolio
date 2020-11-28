import React from "react";

import Image from 'react-bootstrap/Image'

import './Header.scss'
import logo from "../../img/logo.svg"

class Header extends React.Component {
    render() {
        return (
            <div>
                <Image className="logo-img" src={logo} />
                { window.innerWidth >= 786 ?
                    <ul id="nav">
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/">Work</a></li>
                    </ul> :
                    <div />
                }
            </div>
        );
    }
}

export default Header;