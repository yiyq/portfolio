import React from "react";
import { withRouter } from 'react-router';

import Image from 'react-bootstrap/Image'

import './Header.scss';

import logo from '../../img/logo.svg';
import resume from '../../resume_yi.pdf';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Image className="logo-img" src={logo} />
                { window.innerWidth >= 786 ?
                    <ul id="nav">
                        <li><a href={ resume }>Resume</a></li>
                        <li><a href="/portfolio/about">About</a></li>
                        <li><a href="/portfolio">Work</a></li>
                    </ul> :
                    <div />
                }
            </div>
        );
    }
}

export default withRouter(Header);