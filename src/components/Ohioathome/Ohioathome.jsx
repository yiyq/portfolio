import React from "react";

import Header from '../Header/Header';
import NavFooter from '../Footer/NavFooter';
import SimpleImageSlider from "react-simple-image-slider";

import './Ohioathome.scss';

import coverLong from '../../img/ohioathome/OAH_projcover_long.png';
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

class Ohioathome extends React.Component {
    render() {
        const images = [
            { url: flowChart1 },
            { url: flowChart2 },
            { url: flowChart3 },
        ];
        const flowChartWidth = window.innerWidth * 0.8 * 0.6;
        const flowChartHeight = flowChartWidth * 921 / 1272;

        return (
            <div>
                <Header />
                <div className="ohioathome-header">Ohioathome Healthcare Agency</div>
                <p className="ohioathome-subheader">Employee portal</p>
                <div className="ohioathome-fade-in">
                    { window.innerWidth > 786 ? <img className="ohioathome-cover-img" src={ coverLong } /> :
                        <img className="ohioathome-cover-img" src={ cover } />
                    }
                </div>
                <div className="ohioathome-overview-flex-container">
                    <div className="ohioathome-overview-flex-item">
                        <h3>Overview</h3>
                        <p>
                            Ohioathome is a healthcare agency located in Columbus Ohio providing direct support home healthcare
                            and remote support healthcare services. The provider portal application is made for healthcare providers
                            to manage their primary responsibilities.
                        </p>
                    </div>
                    <div className="ohioathome-overview-flex-item">
                        <h3>Role</h3>
                        <p>UI/UX designer, Product designer</p>
                        <h3>Tools</h3>
                        <p>AI, Figma</p>
                        <h3>Duration</h3>
                        <p>1 months (2020)</p>
                    </div>
                    <img className="ohioathome-work-flow-img" src={ workflow } />
                </div>
                <hr className="ohioathome-hr" />
                <div className="ohioathome-research-container">
                    <h1>Research</h1>
                    <h3>Background</h3>
                    <p>
                        Ohioathome is a home healthcare service company located in Columbus, Ohio. It was founded in 2011,
                        and now there are over 100 home healthcare providers from Ohioathome serving more than 20 clients
                        with developmental disabilities in central Ohio. Ohioathome is the sister company of Medforall,
                        the company I worked for after graduated from college. This time, I joined Ohioathome as a UI/UX
                        designer to build a product that helps our direct service healthcare providers to manage their work.
                    </p>
                    <img className="ohioathome-research-cover-img" src={ researchCover } />
                    <h3>Personas</h3>
                    <p>
                        To understand the user, I talked to our healthcare providers, interviewed them about what is their
                        working routine, how they organize their work, and also a little bit about their personal goals.
                        And I concluded two personas that can represent most of their peculiarities.
                    </p>
                    <div className="ohioathome-persona-container">
                        <img className="ohioathome-persona-1-img" src={ persona1 } />
                        <img className="ohioathome-persona-2-img" src={ persona2 } />
                    </div>
                    <h3>Problem statement</h3>
                    <p>
                        State and counties have a lot of complex requirements to track healthcare providers’ work. From
                        precise location check-in, check-out to submit the report for each shift they finished in 24 hrs.
                        Currently, there is no platform or solution for them to organize these works in one place. And
                        it is hard for agencies to collect all this information, furthermore, it causes a chain effect
                        that it would be difficult to submit documents and report to the state and counties.
                        <br /><br />
                        Therefore, our product development team proposes a digital solution which is a web app. Through
                        this app, providers can <strong>manage their schedule</strong>, <strong>check-in/check-out</strong> during working shifts, <strong>submit reports</strong>.
                        Furthermore, they can <strong>access the client’s basic service guidelines</strong> and there also will be a playground
                        for them to <strong>communicate</strong> information related to clients.
                        <br /><br />
                        In one word, we will design a <strong>web app</strong> for all direct support providers with the following features:
                        <strong> schedule management, check-in/check-out service, report management, access to client’s service
                            guidelines, and communication</strong>.
                    </p>
                    <div className="ohioathome-spacer" />
                    <h3>User stories</h3>
                    <p>
                        All of the previous steps gave me a better idea of how to build this product with pertinence.
                        The next step is to develop a user stories board helping me define the features, clear the structure,
                        and create a user flow.
                    </p>
                    <img className="ohioathome-user-stories-img" src={ userStories } />
                </div>
                <hr className="ohioathome-hr" />
                <div className="ohioathome-ideation-container">
                    <h1>Ideation</h1>
                    <h3>Flow chart</h3>
                    <div className="ohioathome-spacer" />
                    { window.innerWidth > 1024 ?
                        <SimpleImageSlider
                            width={flowChartWidth}
                            height={flowChartHeight}
                            images={images}
                            showNavs={true}
                        /> :
                        <div>
                            <img className="ohioathome-flow-chart-img" src={ flowChart1 } />
                            <img className="ohioathome-flow-chart-img" src={ flowChart2 } />
                            <img className="ohioathome-flow-chart-img" src={ flowChart3 } />
                        </div>
                    }
                    <div className="ohioathome-spacer" />
                    <h3>Wireframe</h3>
                    <p>
                        After having this structure, I moved on to wireframe. Some sketches were made first helping me define some detailed interactions.
                    </p>
                    <img className="ohioathome-wireframe-img" src={ wireframe } />
                    <p>
                        <h4>Profile menu</h4><br />
                        Under this section, users are able to manage their personal information, working schedule, and manage reports.<br />
                        <strong>Profile</strong>: providers can change their profile picture, basic information, and track the validity of compliance documents.<br />
                        <strong>My calendar</strong>: where shows the schedule, RSVP to assigned shifts, manage availability, and pick up suggested shifts. Check-in/check-out and submit reports are also available actions according to shift time.<br />
                        <strong>Reports</strong>: submit reports on time is an important responsibility for providers. This is where they can track and submit missing reports.<br />
                    </p>
                    <img className="ohioathome-wireframe-img" src={ wireframe1 } />
                    <p>
                        <strong>Newsfeed</strong><br />
                        Here is a mini social media function for providers to communicate with each other. They can post
                        important notes during their shift to notify other providers who are going to serve the same clients.
                        They can leave reminders to track the client’s needs. They can also share interesting stories that happened with clients.
                        Within this section, providers can learn more about their clients, co-workers, and the community.
                    </p>
                    <img className="ohioathome-wireframe-img" src={ wireframe2 } />
                    <p>
                        <strong>Client list</strong><br />
                        All clients the provider is working with are listed here. In each client’s detail view, they can
                        check the client’s profile and view all posts related to this client. In the other tab, They can
                        review the client’s service guidelines and important notices.
                    </p>
                    <img className="ohioathome-wireframe-img" src={ wireframe3 } />
                    <p>
                        <strong>Notification center</strong><br />
                        All sorts of notifications and reminders will be listed here. Most of them need an immediate reaction
                        from the provider. Including RSVP to assigned shift, check-in, check-out, submit the report,
                        client’s announcement, etc. Providers can easily react to those notifications by expanding the cards.
                    </p>
                    <img className="ohioathome-wireframe-img" src={ wireframe4 } />
                </div>
                <hr className="ohioathome-hr" />
                <div className="ohioathome-prototype-container">
                    <h1>Prototype</h1>
                    <p>
                        A prototype was made in Figma to demonstrate the web app’s features and function. Ohioathome’s
                        brand identity was applied to this product.
                    </p>
                    <img className="ohioathome-prototype-img" src={ prototype } />
                </div>
                <hr className="ohioathome-hr" />
                <div className="ohioathome-testing-container">
                    <h1>Test</h1>
                    <img className="ohioathome-testing-img" src={ testing } />
                    <h3>Reflection</h3>
                    <p>
                        This is my first “real-world” project and I am glad to have this opportunity while working at
                        Ohioathome Healthcare Agency. As the only designer on the team, my responsibility was not only
                        creating interfaces but also I wore the hat of the product designer to define the product features,
                        designed the structure, and involved in usability tests. The product is now in a pilot launch stage(early December)
                        and we are receiving positive feedback from our healthcare providers. Our team will keep an eye on
                        solving instant issues and always make improvements.
                        <br /><br />
                        If you would like to see more works I have done with this company, please feel free to contact me.
                    </p>
                </div>
                <NavFooter />
            </div>
        );
    }
}

export default Ohioathome;