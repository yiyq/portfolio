import React from "react";
import { withRouter } from 'react-router';

import './Header.scss';

import resume from '../../resume_yi.pdf';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        this.props.history.push(`/portfolio/${event}`);
    }

    render() {
        return (
            <div>
                { window.innerWidth >= 786 ?
                    <ul id="nav">
                        <li><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
                        <li onClick={() => this.handleOnClick('about')}>About</li>
                        <li onClick={() => this.handleOnClick('')}>Work</li>
                    </ul> :
                    <div />
                }
            </div>
        );
    }
}

export default withRouter(Header);