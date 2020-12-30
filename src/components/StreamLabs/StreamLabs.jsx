import React from "react";

import Header from '../Header/Header';
import NavFooter from '../Footer/NavFooter';

import './StreamLabs.scss';

import streamlabsCover from '../../img/streamlabs/streamlabs_cover.png';
import streamlabsWorkflow from '../../img/streamlabs/streamlabs_workflow.png';
import alertBoxExample from '../../img/streamlabs/streamlabs_demo.png';
import observation from '../../img/streamlabs/streamlabs_observation.png';
import sketche from '../../img/streamlabs/streamlabs_sketche.png';
import wireframe1 from '../../img/streamlabs/streamlabs_wireframe_1.png';
import wireframe2 from '../../img/streamlabs/streamlabs_wireframe_2.png';
import wireframe3 from '../../img/streamlabs/streamlabs_wireframe_3.png';
import prototypeCover from '../../img/streamlabs/streamlabs_redesign.png';
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
                    <img className="streanlabs-cover-img" src={ streamlabsCover } />
                </div>
                <div className="streamlabs-overview-container">
                    <h2>Overview</h2>
                    <p>
                        This project is a design challenge from Streamlabs, a top live streaming platform, which requires to redesign
                        the alert box setting page. The goal is to enhance the visualization and usability of the page.
                    </p>
                    <h2>Role</h2>
                    <p>Design researcher, UI/UX designer</p>
                    <h2>Tools</h2>
                    <p>AI, PS, Figma</p>
                    <h2>Duration</h2>
                    <p>3 Days (2019)</p>
                    <img className="streamlabs-work-flow-img" src={ streamlabsWorkflow } />
                </div>
                <hr className="streamlabs-hr" />
                <div className="streamlabs-research-container">
                    <h2>What is Streamlabs? What is the use of alert boxes?</h2>
                    <div className='streamlabs-spacer-light' />
                    <p>
                        Streamlabs is a free <strong>broadcasting tool</strong> for creators to stream on major streaming platforms and it
                        provides a customizable alert box (alerts for tips, follows, subs, etc.) for streamers to <strong>interact with their audiences</strong> while streaming.<br />
                        The alert box setting page is a key factor to take full advantage of this feature. Through the customizable
                        setting options, streamers can <strong>better engage with their audiences</strong> and <strong>make themselves different from others</strong>.
                    </p>
                    <img className="streamlabs-alert-box-img" src={alertBoxExample} />
                    <h2>Let’s take a look at how does the current alert box work </h2>
                    <div className='streamlabs-spacer' />
                    <img className="streamlabs-observation-img" src={observation} />
                    <p className="streamlabs-note">Notes while observation</p>
                    <div className='streamlabs-spacer-light' />
                    <p>
                        The contrast of primary color and secondary color makes your eyes intuitively drop on the customizable
                        features. And a large variety of options let streamers can fully customize their alert box.
                        However, I still realized several pain points while using and potential design opportunities can optimize the user experience.
                    </p>
                    <ul>
                        <li>Some of functions are not directly usable on this page. They are only functioning when a new preview window is open.</li>
                        <li>The tabs for navigation between different types of alerts are not clear and displayed in an obvious way.</li>
                        <li>The customizable options are complicated, which cause users hard to visualize the effect.</li>
                        <li>The text sizes are too similar also hard to distinguish the function of the contents.</li>
                    </ul>
                    <p>Therefore, my <strong>goal</strong> of redesigning this alert box page is to make sure the streamer can:</p>
                    <ul>
                        <li>Visualize their change of settings within the page.</li>
                        <li>Reorganize the setting options to reduce confusion and increase efficiency.</li>
                    </ul>
                </div>
                <hr className="streamlabs-hr" />
                <div className="streamlabs-ideation-container">
                    <p>
                        My first step is to create a new layout that can accomplish my first goal - visualize their customizations.
                        I can add a preview section to this page instead of opening a new window and switching back and forth while
                        making changes. The preview section within the page will run the effect once the streamer changes the settings.
                        Before they generate the URL and apply it to the streaming platform, they would get a better idea of what will
                        the alert box looks like.
                    </p>
                    <div className='streamlabs-spacer-light' />
                    <h2>What are the alternative layouts?</h2>
                    <img className="streamlabs-ideation-skeche-img" src={ sketche } />
                    <p className="streamlabs-note">Sketches of layout</p>
                    <p>
                        After brainstorming, I decided to go with a side-by-side layout (bottom-left).<br />
                        On the left is the operation section, which includes a preview window, preset templates, options of the test, and URL generator to apply the customized alert box to streaming platforms.<br />
                        On the right side is the settings section, where the streamer can customize different types of alert boxes.<br />
                        Going with this side-by-side layout, users will see the preview and settings at the same time. It will avoid the action of scrolling back and forth.
                    </p>
                    <div className="streamlabs-spacer-light" />
                    <img className="streamlabs-ideation-wireframe1-img" src={ wireframe1 } />
                    <p className="streamlabs-note">Wireframe of operation section</p>
                    <div className='streamlabs-spacer-light' />
                    <img className="streamlabs-ideation-wireframe2-img" src={ wireframe2 } />
                    <p className="streamlabs-note">Wireframe of settings section</p>
                    <div className='streamlabs-spacer-light' />
                    <p>
                        The next challenge is to apply a more obvious hierarchy to the page, which can make it easier to
                        navigate around and more friendly to operate. I stepped into details and explore alternatives in
                        UI buttons, font sizes, font styles, and spacing.
                    </p>
                    <div className='streamlabs-spacer-light' />
                    <img className="streamlabs-ideation-wireframe3-img" src={ wireframe3 } />
                    <p className="streamlabs-note">Exploration for UI buttons</p>
                </div>
                <hr className="streamlabs-hr" />
                <div className="streamlabs-prototype-container">
                    <h2>Putting things together</h2>
                    <div className='streamlabs-spacer-light' />
                    <p>While putting the elements together, my decisions were driven by two principles:</p>
                    <ul>
                        <li>Minimize the steps to accomplish an action</li>
                        <li>Optimize the space</li>
                    </ul>
                </div>
                <div>
                    <img className='streamlabs-prototype-cover-img' src={ prototypeCover } />
                    <p className="streamlabs-note">Redesigned alter box page</p>
                </div>
                <div className="streamlabs-prototype-container">
                    <img className='streamlabs-test-gif' src={ testGif } />
                    <p className="streamlabs-note">Redesigned alter box page</p>
                    <div className='streamlabs-spacer-light' />
                    <img className='streamlabs-enable-gif' src={ enableGif } />
                    <p className="streamlabs-note">Redesigned alter box page</p>
                </div>
                <hr className="streamlabs-hr" />
                <div className="streamlabs-reflection-container">
                    <h1>Reflection</h1>
                    <p>
                        This design challenge allowed me to get familiar with an industry that I’ve never touched before.
                        Hopefully, improving the layout and iterate some visual elements can help them better understand
                        the setting process and take full advantage of this alert box feature.
                    </p>
                </div>
                <NavFooter />
            </div>
        );
    }
}

export default StreamLabs;