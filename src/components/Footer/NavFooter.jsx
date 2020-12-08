import React from "react";
import { withRouter } from 'react-router';

import './NavFooter.scss'

class NavFooter extends React.Component {
    render() {
        return (
            <div className="nav-footer">
                <div className="nav-footer-item"><a href="/portfolio">All</a></div>
                <div className="nav-footer-item"><a href="/portfolio/streamLabs">Streamlabs</a></div>
                <div className="nav-footer-item"><a href="/portfolio/medforall">Medforall</a></div>
                <div className="nav-footer-item"><a href="/portfolio/ohioathome">Ohioathome</a></div>
            </div>
        );
    }
}

export default withRouter(NavFooter);