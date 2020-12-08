import React from "react";
import { withRouter } from 'react-router';

import './NavFooter.scss'

class NavFooter extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        this.props.history.push(`/portfolio/${event}`);
    }

    render() {
        return (
            <div className="nav-footer">
                <div className="nav-footer-item" onClick={() => this.handleOnClick('')}>
                    All
                </div>
                <div className="nav-footer-item" onClick={() => this.handleOnClick('streamLabs')} >
                    Streamlabs
                </div>
                <div className="nav-footer-item" onClick={() => this.handleOnClick('medforall')} >
                    Medforall
                </div>
                <div className="nav-footer-item" onClick={() => this.handleOnClick('ohioathome')} >
                    Ohioathome
                </div>
            </div>
        );
    }
}

export default withRouter(NavFooter);