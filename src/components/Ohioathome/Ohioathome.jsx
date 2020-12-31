import React from "react";
import FadeIn from "react-lazyload-fadein";

import Header from '../Header/Header';
import NavFooter from '../Footer/NavFooter';

import './Ohioathome.scss';

import cover from '../../img/ohioathome/OAH_projcover.png';
import workflow from '../../img/ohioathome/OAH_workflow.png';
import researchCover from '../../img/ohioathome/OAH_research_cover.png';
import persona1 from '../../img/ohioathome/OAH_personas_1.png';
import persona2 from '../../img/ohioathome/OAH_personas_2.png';
import userStories from '../../img/ohioathome/OAH_user_stories.png';
import flowChart1 from '../../img/ohioathome/OAH_flow_chart_1.png';
import flowChart2 from '../../img/ohioathome/OAH_flow_chart_2.png';
import flowChart3 from '../../img/ohioathome/OAH_flow_chart_3.png';
import wireframe from '../../img/ohioathome/OAH_wireframe.png';
import wireframe1 from '../../img/ohioathome/OAH_wireframe1.png';
import wireframe2 from '../../img/ohioathome/OAH_wireframe2.png';
import wireframe3 from '../../img/ohioathome/OAH_wireframe3.png';
import wireframe4 from '../../img/ohioathome/OAH_wireframe4.png';
import prototype from '../../img/ohioathome/OAH_prototype.png';
import testing from '../../img/ohioathome/OAH_testing.png';
import streamlabsWorkflow from "../../img/streamlabs/streamlabs_workflow.png";

class Ohioathome extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="ohioathome-header">Ohioathome Healthcare Agency</div>
                <p className="ohioathome-subheader">Employee portal</p>
                <div className="ohioathome-fade-in">
                    <img className="ohioathome-cover-img" src={ cover } />
                </div>
                <div className="ohioathome-overview-container">
                    <h3>Overview</h3>
                    <p>
                        Ohioathome is a healthcare agency located in Columbus Ohio providing direct support home healthcare
                        and remote support healthcare services. The provider portal application is made for healthcare providers
                        to manage their primary responsibilities.
                    </p>
                    <h3>Role</h3>
                    <p>UI/UX designer, Product designer</p>
                    <h3>Tools</h3>
                    <p>AI, Figma</p>
                    <h3>Duration</h3>
                    <p>1 months (2020)</p>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="ohioathome-work-flow-img" src={ workflow } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                </div>
                <hr className="ohioathome-hr" />
                <div className="ohioathome-research-container">
                    <h2>Introducing Ohioathome healthcare agency.</h2>
                    <div className="ohioathome-spacer-light" />
                    <p>
                        Ohioathome is a home healthcare service company located in Columbus, Ohio, founded in 2011.
                        There are over 100 home healthcare providers from Ohioathome serving more than 20 clients with
                        developmental disabilities in central Ohio. Ohioathome is the sister company of Medforall, the
                        company I worked for after graduated from college. I joined Ohioathome as a UI/UX designer to
                        build products that help our healthcare providers and administrators to manage their work.
                    </p>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="ohioathome-research-cover-img" src={ researchCover } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                    <h2>What becomes a problem.</h2>
                    <div className="ohioathome-spacer-light" />
                    <p>
                        State and counties have a lot of complex requirements to track healthcare providers’ work. From
                        precise location check-in, check-out to submit the report for each shift they finished in 24 hrs.
                        Currently, there is no platform or solution for them to organize these works in one place.
                        Administrators use Excel to manage shifts. Providers can only access to client’s document by
                        reading word documents. Agency is hard to generate information. All of these causes a chain effect
                        that it would be hard to submit reports to the state and counties.
                    </p>
                    <h2>
                        Set the goal.
                    </h2>
                    <div className="ohioathome-spacer-light" />
                    <p>
                        One of our solutions for our direct support healthcare provider is a web app. Allow them to
                        manage their schedule, check-in/check-out during working shifts, submit reports.
                        Furthermore, they can access the client’s basic service guidelines. There also will be a
                        playground for them to communicate information related to clients. They will be able to
                        manage their work in this single place.
                    </p>
                </div>
                <hr className="ohioathome-hr" />
                <div className="ohioathome-ideation-container">
                    <h2>
                        Who are direct support healthcare providers?
                    </h2>
                    <div className="ohioathome-spacer-light" />
                    <p>
                        A direct healthcare provider is a distinct position. They work directly with people who have
                        intellectual or developmental disabilities. They are aiming to assist people in realizing their
                        full potential. They also help with disabilities engaged in their community.
                        <br /><br />
                        I interviewed our providers about their working routine, how they organize their work and their
                        personal goals. I concluded two personas that can represent most of their peculiarities.
                    </p>
                    <FadeIn>
                        {onload => (
                            <div className="ohioathome-persona-container">
                                <img className="ohioathome-persona-1-img" src={ persona1 } onLoad={onload} />
                                <img className="ohioathome-persona-2-img" src={ persona2 } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                    <h2>What to expect?</h2>
                    <p>
                        The previous steps gave me a better idea of how to build this product with pertinence. A user
                        stories board helped me address their needs and define the features.
                    </p>
                    <div className="ohioathome-spacer" />
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="ohioathome-user-stories-img" src={ userStories } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                    <div className="ohioathome-spacer" />
                    <p>
                        Following the user storyboard, I build a flow chart to structure out the app. It is time to explore
                        the user flow, group features, and think about detailed steps.
                    </p>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="ohioathome-flow-chart-img" src={ flowChart1 } onLoad={onload}/>
                            </div>
                        )}
                    </FadeIn>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="ohioathome-flow-chart-img" src={ flowChart2 } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="ohioathome-flow-chart-img" src={ flowChart3 } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                </div>
                <hr className="ohioathome-hr" />
                <div className="ohioathome-prototype-container">
                    <h2>
                        Sketching for ideas.
                    </h2>
                    <div className="ohioathome-spacer-light" />
                    <p>
                        Having the structure and flow as a table of contents, I started sketching out the interfaces.
                    </p>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="ohioathome-wireframe-img" src={ wireframe } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                    <p>
                        It is hard to build up a multi-function app at once, so I chopped the function into pieces.
                        Similar to write academic papers, I have an outline and fill it up gradually. This process can
                        make sure never missing a single part and easy to make arrangements.
                        <br /><br />
                        <strong>Chapter 1: Profile menu</strong><br />
                        Under this section, users can manage their personal information, working schedule, and manage reports.<br />
                        1.1 Profile: track personal information<br />
                        1.2 My calendar: manage the schedule<br />
                        1.3 Reports: manage reports
                    </p>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="ohioathome-wireframe-img" src={ wireframe1 } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                    <p>
                        <strong>Chapter 2: Newsfeed</strong><br />
                        Here is a mini social media function for providers to communicate with each other. They can post
                        important notes during their shift to notify another provider who will serve the same client.
                        They can leave reminders to track the client’s needs. They can also share interesting stories
                        that happened with clients. Within this section, providers can learn more about their clients,
                        co-workers, and the community.
                    </p>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="ohioathome-wireframe-img" src={ wireframe2 } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                    <p>
                        <strong>Chapter 3: Client list</strong><br />
                        All clients the provider is working with are listed here. In each client’s detail view, they can
                        check the client’s profile and view all posts related to this client. In the other tab, They
                        can review the client’s service guidelines and important notices.
                    </p>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="ohioathome-wireframe-img" src={ wireframe3 } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                    <p>
                        <strong>Chapter 4: Notification center</strong><br />
                        All sorts of notifications and reminders will be listed here. Most of them need an immediate
                        reaction from the provider. Including RSVP to assigned shift, check-in, check-out, submit the
                        report, client’s announcement, etc. Providers can respond to those notifications by expanding the cards.
                    </p>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="ohioathome-wireframe-img" src={ wireframe4 } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                </div>
                <hr className="ohioathome-hr" />
                <div className="ohioathome-final-container">
                    <h2>Here it is!</h2>
                    <p>
                        A high fidelity prototype was made in Figma to demonstrate the web app’s features and function.
                        The process also refines the current brand identity. The color palette has been updated and new
                        UI features were added to the library.
                    </p>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="ohioathome-prototype-img" src={ prototype } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                </div>
                <hr className="ohioathome-hr" />
                <div className="ohioathome-testing-container">
                    <h2>Validate with our providers.</h2>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="ohioathome-testing-img" src={ testing } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                    <p>
                        As the only designer on the team, my responsibility was not only creating interfaces. I also
                        built up the structure, defined the features, and involved usability tests. The product is now
                        in a pilot launching stage. We are receiving positive feedback from our healthcare providers.
                        Our team will keep an eye on solving instant issues and always make improvements.
                    </p>
                </div>
                <NavFooter />
            </div>
        );
    }
}

export default Ohioathome;