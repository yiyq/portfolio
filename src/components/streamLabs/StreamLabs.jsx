import React from "react";

import Header from "../Header/Header";

import './StreamLabs.scss';

import streamlabsCover from '../../img/streamlabs_cover.png';
import streamlabsCoverLong from '../../img/streamlabs_cover_long.png';
import streamlabsWorkflow from '../../img/streamlabs_workflow.png';
import alertBoxExample from '../../img/streamlabs_alert_box_exampl.png';
import observation from '../../img/streamlabs_observation.png';
import sketche from '../../img/streamlabs_sketche.png';
import wireframe from '../../img/streamlabs_wireframe.png';
import wireframeVertical from '../../img/streamlabs_wireframe_vertical.png';

class StreamLabs extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="header">
                    Streamlabs Alert Box
                </div>
                <div className="fade-in">
                    { window.innerWidth > 786 ? <img className="streanlabs-cover-img" src={streamlabsCoverLong} /> : <img className="streanlabs-cover-img" src={ streamlabsCover } />}
                </div>
                <div className="streamlabs-overview-flex-container">
                    <div className="streamlabs-overview-flex-item">
                        <h3>Overview</h3>
                        <p>This project is a design challenge from Streamlabs, a top live streaming software. The requirement is redesign the alert
                            box setting page. My approach is to give the page a clearer hierarchy, easier to operate and more friendly to first time users.</p>
                    </div>
                    <div className="streamlabs-overview-flex-item">
                        <h3>Role</h3>
                        <p>Design researcher, UI/UX designer</p>
                        <h3>Tools</h3>
                        <p>AI, PS, Figma</p>
                        <h3>Duration</h3>
                        <p>3 Days (2019)</p>
                    </div>
                    <img className="work-flow-img" src={ streamlabsWorkflow } />
                </div>
                <hr />
                <div className="streamlabs-research-container">
                    <h1>Research</h1>
                    <h3>What is Streamlabs and alert box?</h3>
                    <p>Streamlabs is a free <strong>broadcasting tool</strong> for creators to stream on major platforms. Streamlabs provide <strong>customizable alert box</strong> (alerts for tips, follows, subs and etc during streaming) for streamers to interact with their audiences.
                        The alert box setting page in this redesign challenge is a key factor to take full advantage of this feature. Through the setting options, streamers are able to <strong>reveal their personalities</strong> and <strong>better engage their audiences</strong>.
                    </p>
                    <img className="alert-box-img" src={alertBoxExample} />
                    <h3>Observation</h3>
                    <p>As a “first time streamer”, after knowing the use and importance of alert box, I signed up for Streamlabs and tested how does the current setting page work.</p>
                    <img className="observation-img" src={observation} />
                    <h3>Analysis</h3>
                    <p>Based on my observation and usability test, i defined some key problems, brainstormed the reason behind them and also think of potential improvements.</p>
                    <div className="streamlabs-research-flex-container">
                        <div className="streamlabs-research-flex-item">
                            <h3>PAIN POINTS</h3>
                            <p className="analysis">There are lots of customizable features, users can take fully control. But on the other hand, too <strong>complicate</strong> and <strong>overwhelming</strong>.</p>
                            <p className="analysis">Some of the <strong>functions are not directly usable on this page</strong>. They only functioning when preview is up.</p>
                            <p className="analysis"><strong>Hard to navigate around</strong>. I found its difficult to distinguish the contents.</p>
                        </div>
                        <div className="streamlabs-research-flex-item">
                            <h3>{ window.innerWidth > 786 ? 'DESIGN OPPORTUNITIES' : 'OPPORTUNITIES'}</h3>
                            <p className="analysis">The <strong>hierarchy</strong> of the page is not clear enough. Sections are not divided in an obvious way.</p>
                            <p className="analysis">Contents that not usable take space and cause confusion.</p>
                            <p className="analysis">The structure and user flow could be improved. The styles of texts are too close.</p>
                        </div>
                    </div>
                    <h3>Goals</h3>
                    <p>Having these insights in mind, I set several goals for iterating the design to help building the alert box a more user-friendly experience.</p>
                    <div className="goals-container">
                        <p className="goals">- Structure the contents in a more clear hierarchy to improve user understanding.</p>
                        <p className="goals">- Improve the visual elements, including buttons and text styles to simplify the interaction.</p>
                    </div>
                </div>
                <hr />
                <div className="streamlabs-ideation-container">
                    <h1>Ideation</h1>
                    <h3>Sketches</h3>
                    <p>The first step was coming up a few options of the layouts.</p>
                    <img className="ideation-skeche-img" src={ sketche } />
                    <p>The idea was to seperate the page into two main sections by its function.<br />
                        One as <strong>application</strong>, where shows all the operations related to the final display. Contains a preview window, templates, filters for alert types and URL for test and launch.<br/>
                        The other as <strong>settings</strong>, which is the setting tab in the original design. This part contorls detail information like animated effect, language filters, and so on.</p>
                    <div className="streamlabs-spacer" />
                    <h3>Wireframes</h3>
                    <p>Next step I went into wireframe. Playing around the layouts in a digital format and with more detailed content helped me make decisions and refinements.</p>
                    { window.innerWidth > 786 ? <img className="wireframe-img" src={ wireframe } /> : <img className="wireframe-img-vertical" src={ wireframeVertical } />}
                </div>
                <hr />
                <div className="streamlabs-prototype-container">
                    <h1>Prototype</h1>
                </div>
                <div className="footer"/>
            </div>
        );
    }
}

export default StreamLabs;