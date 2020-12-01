import React from "react";

import Header from '../Header/Header';
import NavFooter from '../Footer/NavFooter';

import './StreamLabs.scss';

import streamlabsCover from '../../img/streamlabs/streamlabs_cover.png';
import streamlabsCoverLong from '../../img/streamlabs/streamlabs_cover_long.png';
import streamlabsWorkflow from '../../img/streamlabs/streamlabs_workflow.png';
import alertBoxExample from '../../img/streamlabs/streamlabs_alert_box_exampl.png';
import observation from '../../img/streamlabs/streamlabs_observation.png';
import sketche from '../../img/streamlabs/streamlabs_sketche.png';
import wireframe from '../../img/streamlabs/streamlabs_wireframe.png';
import wireframeVertical from '../../img/streamlabs/streamlabs_wireframe_vertical.png';
import prototypeCover from '../../img/streamlabs/streamlabs_prototype_cover.png';
import testGif from '../../img/streamlabs/streamlabs_test.gif';
import enableGif from '../../img/streamlabs/streamlabs_enable.gif';

class StreamLabs extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="streamlabs-header">
                    Streamlabs Alert Box
                </div>
                <div className="streamlabs-fade-in">
                    { window.innerWidth > 786 ? <img className="streanlabs-cover-img" src={streamlabsCoverLong} /> :
                        <img className="streanlabs-cover-img" src={ streamlabsCover } />
                    }
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
                    <img className="streamlabs-work-flow-img" src={ streamlabsWorkflow } />
                </div>
                <hr className="streamlabs-hr" />
                <div className="streamlabs-research-container">
                    <h1>Research</h1>
                    <h3>What is Streamlabs and alert box?</h3>
                    <p>Streamlabs is a free <strong>broadcasting tool</strong> for creators to stream on major platforms. Streamlabs provide <strong>customizable alert box</strong> (alerts for tips, follows, subs and etc during streaming) for streamers to interact with their audiences.
                        The alert box setting page in this redesign challenge is a key factor to take full advantage of this feature. Through the setting options, streamers are able to <strong>reveal their personalities</strong> and <strong>better engage their audiences</strong>.
                    </p>
                    <img className="streamlabs-alert-box-img" src={alertBoxExample} />
                    <h3>Observation</h3>
                    <p>As a “first time streamer”, after knowing the use and importance of alert box, I signed up for Streamlabs and tested how does the current setting page work.</p>
                    <img className="streamlabs-observation-img" src={observation} />
                    <h3>Analysis</h3>
                    <p>Based on my observation and usability test, i defined some key problems, brainstormed the reason behind them and also think of potential improvements.</p>
                    <div className="streamlabs-research-flex-container">
                        <div className="streamlabs-research-flex-item">
                            <h3>Pain Points</h3>
                            <p className="streamlabs-analysis">There are lots of customizable features, users can take fully control. But on the other hand, too <strong>complicate</strong> and <strong>overwhelming</strong>.</p>
                            <p className="streamlabs-analysis">Some of the <strong>functions are not directly usable on this page</strong>. They only functioning when preview is up.</p>
                            <p className="streamlabs-analysis"><strong>Hard to navigate around</strong>. I found its difficult to distinguish the contents.</p>
                        </div>
                        <div className="streamlabs-research-flex-item">
                            <h3>{ window.innerWidth > 786 ? 'Design Opportunities' : 'Design'}</h3>
                            <p className="streamlabs-analysis">The <strong>hierarchy</strong> of the page is not clear enough. Sections are not divided in an obvious way.</p>
                            <p className="streamlabs-analysis">Contents that not usable take space and cause confusion.</p>
                            <p className="streamlabs-analysis">The structure and user flow could be improved. The styles of texts are too close.</p>
                        </div>
                    </div>
                    <h3>Goals</h3>
                    <p>Having these insights in mind, I set several goals for iterating the design to help building the alert box a more user-friendly experience.</p>
                    <div className="streamlabs-goals-container">
                        <p className="streamlabs-goals">- Structure the contents in a more clear hierarchy to improve user understanding.</p>
                        <p className="streamlabs-goals">- Improve the visual elements, including buttons and text styles to simplify the interaction.</p>
                    </div>
                </div>
                <hr className="streamlabs-hr" />
                <div className="streamlabs-ideation-container">
                    <h1>Ideation</h1>
                    <h3>Sketches</h3>
                    <p>The first step was coming up a few options of the layouts.</p>
                    <img className="streamlabs-ideation-skeche-img" src={ sketche } />
                    <p>The idea was to seperate the page into two main sections by its function.<br />
                        One as <strong>application</strong>, where shows all the operations related to the final display. Contains a preview window, templates, filters for alert types and URL for test and launch.<br/>
                        The other as <strong>settings</strong>, which is the setting tab in the original design. This part contorls detail information like animated effect, language filters, and so on.</p>
                    <div className="streamlabs-spacer" />
                    <h3>Wireframes</h3>
                    <p>Next step I went into wireframe. Playing around the layouts in a digital format and with more detailed content helped me make decisions and refinements.</p>
                    { window.innerWidth > 786 ? <img className="streamlabs-wireframe-img" src={ wireframe } /> : <img className="streamlabs-wireframe-img-vertical" src={ wireframeVertical } />}
                </div>
                <hr className="streamlabs-hr" />
                <div className="streamlabs-prototype-container">
                    <h1>Prototype</h1>
                    <p>The final appoarch was an interactive prototype in Figma. The redesign changed the structure of the original page.</p>
                    <div className="streamlabs-prototype-cover-container">
                        <p className="streamlabs-prototype">- By spliting the functions into left and right column, user can understanding the operation easier.</p>
                        <p className="streamlabs-prototype">- Distinguish the styles of title, content and notes helps to state the hierarchy clearer.</p>
                    </div>
                    <img className="streamlabs-prototype-cover-img" src={ prototypeCover } />
                    <div className="streamlabs-prototype-git-text-container">
                        <p>In the <strong>preview section</strong> on left, </p>
                        <p className="streamlabs-prototype">- A preview window add for users convenience to check the effect.</p>
                        <p className="streamlabs-prototype">- The options of alert type and test alert function was combined into one part. This not only eliminates unnecessary buttons but also saves space and simplifies the interaction.</p>
                    </div>
                    <div className="streamlabs-prototype-git-text-container">
                        <p>In the <strong>setting section</strong> on right, </p>
                        <p className="streamlabs-prototype">- The tabs are redesigned into a more visible element for clearer navigation.</p>
                        <p className="streamlabs-prototype">- Enable and disable UI button is redesigned into a simpler and space saving format.</p>
                        <p className="streamlabs-prototype">- Some sub setting options was hide when disabled and will show up once the function was enabled. In this case, user won’t be confused by overwhelming setting options.</p>
                    </div>
                    <div className="streamlabs-prototype-gif-container">
                        <img className="streamlabs-prototype-gif-left" src={ testGif } />
                        <img className="streamlabs-prototype-gif-right" src={ enableGif } />
                    </div>
                </div>
                <hr className="streamlabs-hr" />
                <div className="streamlabs-reflection-container">
                    <h1>Reflection</h1>
                    <p>
                        This design challenge gave me the opportunity to get familier with a industry that I’ve never touched before. Got to know how streamers using Streamlabs’ customized alert box feature to establish their personality and engage more audiences.
                        The redesign aiming to improve the structure of the page and iterate some visual elements. By this redesign, hopefully users especially first time streamers can better understand the setting process and take fully advantage of this alert box feature.<br />
                        If there is a chance to move on this project, I would love to research more about streamers’ working routine to ulitimately improve the setting experience for users.
                    </p>
                </div>
                <NavFooter />
            </div>
        );
    }
}

export default StreamLabs;