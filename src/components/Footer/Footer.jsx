import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="fa-linkedin">
                    <a href="https://www.linkedin.com/in/yi-yunqing-650a21b0/">
                        <FontAwesomeIcon
                            className="icon"
                            icon={ faLinkedinIn }
                            size="2x"
                            color="grey"
                        />
                    </a>
                </div>
                <div className="fa-email">
                    <a href="mailto: yiyq43@gmail.com">
                        <FontAwesomeIcon
                            className="icon"
                            icon={ faEnvelope }
                            size="2x"
                            color="grey"
                        />
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;