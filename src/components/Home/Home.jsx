import React from "react";
import { withRouter } from 'react-router';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import imgSL from "../../img/streamlabs/cover_SL.png";
import imgMFA from "../../img/cover_medforall.png";
import imgOAH from "../../img/cover_OAH.png";
import imgOAHSmall from "../../img/cover_sm_OAH.png";

import "./Home.scss"

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        this.props.history.push(`/${event}`);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="intro-container">
                    <span>
                        Hello 🐣 I’m <strong className="home-strong">Yunqing Yi</strong>, a UI/UX designer passionate about solving problems with empathy and creativity.
                    </span>
                </div>
                <div className="flex-container">
                    <div className="flex-item streamLabs" onClick={() => this.handleOnClick('streamLabs')}>
                        <img src={imgSL} />
                        <div className="streamLabs-overlay overlay">
                            <div className="streamLabs-text">Streamlabs</div>
                        </div>
                    </div>
                    <div className="flex-item proj2" onClick={() => this.handleOnClick('medforall')} >
                        <img src={imgMFA} />
                        <div className="proj2-overlay overlay">
                            <div className="proj2-text">Medforall</div>
                        </div>
                    </div>
                </div>
                <div className="proj3" onClick={() => this.handleOnClick('ohioathome')} >
                    { window.innerWidth > 786 ?
                        <img src={imgOAH} /> : <img src={imgOAHSmall} />
                    }
                    <div className="proj3-overlay overlay">
                        <div className="proj3-text">Ohio At Home Healthcare Agency</div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Home);