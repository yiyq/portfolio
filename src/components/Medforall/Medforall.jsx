import React from "react";

import './Medforall.scss';

import Header from "../Header/Header";
import NavFooter from "../Footer/NavFooter";

import medforallCoverLong from "../../img/medforall/MFA_projcover_long.png";
import medforallCover from "../../img/medforall/MFA_projcover.png";
import medforallWorkflow from '../../img/medforall/MFA_workflow.png';
import medforallCompetitive from '../../img/medforall/MFA_competitive.gif';
import medforallLogo1 from '../../img/medforall/MFA_logo_design_1.png';
import medforallLogo2 from '../../img/medforall/MFA_logo_design_2.png';
import medforallDesignSystem from '../../img/medforall/MFA_design_system.png';
import medforallMarketingWebsiteFlow from '../../img/medforall/MFA_marketing_website_flow.png';
import medforallMarketingWebsitePrototype from '../../img/medforall/MFA_marketing_website_prototype.png';
import medforallWebUI from '../../img/medforall/MFA_web_UI.gif';
import medforallWebCode from '../../img/medforall/MFA_web_code.gif';

class Medforall extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="medforall-header">Medforall</div>
                <p className="medforall-subheader">Branding and Marketing website</p>
                <div className="medforall-fade-in">
                    { window.innerWidth > 786 ? <img className="medforall-cover-img" src={ medforallCoverLong } /> :
                        <img className="medforall-cover-img" src={ medforallCover } />
                    }
                </div>
                <div className="medforall-overview-flex-container">
                    <div className="medforall-overview-flex-item">
                        <h3>Background</h3>
                        <p>Medforall is a technology start-up making digital and physical products to support the healthcare industry.
                            As the initial designer for this start-up I created an entire branding package and build a marketing website
                            to rise the company’s popularity.
                        </p>
                    </div>
                    <div className="medforall-overview-flex-item">
                        <h3>Role</h3>
                        <p>Design researcher, UI/UX designer, Developer</p>
                        <h3>Tools</h3>
                        <p>AI, PS, Figma, HTML/CSS/JS</p>
                        <h3>Duration</h3>
                        <p>2 months (2017)</p>
                    </div>
                    <img className="medforall-work-flow-img" src={ medforallWorkflow } />
                </div>
                <hr className="medforall-hr" />
                <div className="medforall-research-container">
                    <h1>Research</h1>
                    <h3>Background Research</h3>
                    <p>By the time I joined Medforall, it was a just founded start-up. The first task for me was to create
                        its brand identity. I work directly with our CEO to clarify our market position and company’s mission.
                    </p>
                    <div className="medforall-spacer" />
                    <h3>Market Research</h3>
                    <img className="medforall-competitive-img" src={ medforallCompetitive } />
                    <p>
                        There are two main category of business in the healthcare industry, traidtional home healthcare
                        agencies and technology companies supporting medical healthcare. Our CEO owns a local traditional
                        home healthcare agency (Ohioathome healthcare agency), and under the rapid development of technology,
                        he sees the potential of applying advanced technology in home healthcare environment. And that is the
                        reason why Medforall was founded in the first place.
                    </p>
                    <div className="medforall-research-flex-container">
                        <div className="medforall-research-flex-item">
                            <h3>Company</h3>
                            <p className="medforall-research">Traditional home healthcare agnecies</p>
                            <p className="medforall-research">Medical healthcare technology companies</p>
                            <p className="medforall-research">Medforall</p>
                        </div>
                        <div className="medforall-research-flex-item">
                            <h3>Features</h3>
                            <p className="medforall-research">- In-person home healthcare<br />- Serving the elderly and disabilities</p>
                            <p className="medforall-research">- Provide data collecting and analysis<br />- Supporting hospitals and organizations </p>
                            <p className="medforall-research">- Fulfill the gap in the current industry<br />- Bring technology to home healthcare services</p>
                        </div>
                    </div>
                    <h3>Our mission and goal</h3>
                    <p className="medforall-goal-p">Medforall strives to define and create the healthcare collaboration framework of the future.
                        We want to cultivate an ecosystem of multidisciplinary providers, and patient monitoring devices
                        to streamline work and collaborate with each other to provide the best care to those we serve.
                    </p>
                </div>
                <hr className="medforall-hr" />
                <div className="medforall-ideation-prototype-container">
                    <h1>Ideation & Prototype</h1>
                    <p>
                        After defined our positoin and mission, and learned deeply about the company and our team, I started
                        design the visual system for Medforall. The ideation and protorype steps including, some research,
                        goes back and forth in this stage.
                    </p>
                    <div className="medforall-spacer" />
                    <h3>Logo design</h3>
                    <img className="medforall-logo-design-1" src={ medforallLogo1 } />
                    <p>
                        The main concept combines the element of protection and technology, which repersents our target
                        market is home healthcare and our products are smart devices and digital platform.
                    </p>
                    <img className="medforall-logo-design-2" src={ medforallLogo2 } />
                    <p>
                        The final outcome is a red cube presenting our core business is technology and wrapped by a blueish-green
                        rounded corner hexagon stands for our value, providing protective service in home healthcare.
                    </p>
                    <div className="medforall-spacer" />
                    <h3>Design system</h3>
                    <p>
                        I also created a complete design style guide as a company mood board and define a style standard
                        for future products and marketing materials.
                    </p>
                    <img className="medforall-design-system-img" src={ medforallDesignSystem } />
                    <div className="medforall-spacer" />
                    <h3>Marketing website</h3>
                    <p>
                        As one part of  brand development, I created a marketing website for increasing the popularity and
                        expanding the team. A sitemap helped me organize the information and visualized the structure.
                    </p>
                    <img className="medforall-marketing-website-flow-img" src={ medforallMarketingWebsiteFlow } />
                    <p>
                        I prototyped the site in Figma first and created three versions fit different screen sizes.
                    </p>
                    <img className="medforall-marketing-website-prototype-img" src={ medforallMarketingWebsitePrototype } />
                </div>
                <hr className="medforall-hr" />
                <div className="medforall-development-container">
                    <h1>Development</h1>
                    <p>
                        With the help from one of our software engineer, I build the website based on a template.
                    </p>
                    <img className="medforall-web-ui-img" src={ medforallWebUI } />
                    <img className="medforall-web-code-img" src={ medforallWebCode } />
                    <div className="medforall-spacer" />
                    <h3>Reflection</h3>
                    <p>
                        I joined Medforall as my first full-time job after graduation. I am very glad having this opportunity
                        to develop the company’s brand identity. This is a valuable process from knowing this industry, contact
                        with people working in this field and apply multiple skill sets to accomplish the projects. These are huge
                        steps for this start-up and as well as myself, and this is just the begining.
                        <br /><br />
                        If you would like to see more works I have done with this company, please feel free to contact me.
                    </p>
                </div>
                <NavFooter />
            </div>
        );
    }
}

export default Medforall;