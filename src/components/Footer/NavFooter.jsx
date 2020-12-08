import React from "react";

import './NavFooter.scss'

class NavFooter extends React.Component {
    render() {
        return (
            <div className="nav-footer">
                <div className="nav-footer-item"><a href="/portfolio">All</a></div>
                <div className="nav-footer-item"><a href="/streamLabs">Streamlabs</a></div>
                <div className="nav-footer-item"><a href="/medforall">Medforall</a></div>
                <div className="nav-footer-item"><a href="/ohioathome">Ohioathome</a></div>
            </div>
        );
    }
}

export default NavFooter;