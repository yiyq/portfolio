import React from "react";
import FadeIn from "react-lazyload-fadein";

import './Medforall.scss';

import Header from "../Header/Header";
import NavFooter from "../Footer/NavFooter";

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
import medforallIndustryChart from '../../img/medforall/MFA_industry_chart.png';

class Medforall extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="medforall-header">Medforall</div>
                <p className="medforall-subheader">Branding and Marketing website</p>
                <div className="medforall-spacer" />
                <div className="medforall-fade-in">
                    <img className="medforall-cover-img" src={ medforallCover } />
                </div>
                <div className="medforall-overview-container">
                    <h2>Overview</h2>
                    <p>
                        Medforall is a technology startup making digital and physical products to support the healthcare
                        industry. I worked on projects including design the logo, build brand identity, etc.
                    </p>
                    <h2>Role</h2>
                    <p>Design researcher, UI/UX designer, Developer</p>
                    <h2>Tools</h2>
                    <p>AI, PS, Figma, HTML/CSS/JS</p>
                    <h2>Duration</h2>
                    <p>2 months (2017)</p>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="medforall-work-flow-img" src={ medforallWorkflow } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                </div>
                <hr className="medforall-hr" />
                <div className="medforall-research-container">
                    <h2>Medforall is...</h2>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="medforall-competitive-img" src={ medforallCompetitive } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                    <p>
                        There are two main categories of business in the healthcare industry: traditional home
                        healthcare agencies and healthcare technology companies.
                    </p>
                    <div className="medforall-spacer-light" />
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="medforall-industry-chart-img" src={ medforallIndustryChart } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                    <div className="medforall-spacer-light" />
                    <p>
                        All the research helped us developed an impregnable mission.
                    </p>
                    <div className="medforall-spacer-light" />
                    <p className="medforall-italic">
                        “Medforall strives to define and create the healthcare collaboration framework of the future.
                        We want to cultivate an ecosystem of multidisciplinary providers and patient monitoring devices.
                        To streamline work and collaborate to provide the best care to those we serve.”
                    </p>
                </div>
                <hr className="medforall-hr" />
                <div className="medforall-ideation-prototype-container">
                    <p>
                        Involved in setting the company’s fundamentals helped me learn deeply about the company and our
                        team. As a newly graduated student and the initial designer for the company means everything starts
                        from zero. I feel thrilled but confused about the next steps.
                    </p>
                    <div className="medforall-spacer" />
                    <h2>I started to ask myself, what does Medforall “look like”?</h2>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="medforall-logo-design-1" src={ medforallLogo1 } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                    <p>
                        A random piece of words from our CEO appeared in my mind “I like hexagon, it means technology.”
                        I kept sketching in my notebook until our CEO went through and pointed out one of the sketches.
                        <br /><br />
                        My imagination and creativity started rolling. We decided on the concept which combines the
                        element of protection and technology. This concept represents our target market is home healthcare
                        and our products are hardware and software solutions.
                    </p>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="medforall-logo-design-2" src={ medforallLogo2 } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                    <p>
                        The final logo is a red cube presenting our core business as technology. It is wrapped by a
                        blueish-green rounded corner hexagon that stands for our value, providing protective service
                        in-home healthcare.
                        <br /><br />
                        Coming along with the logo, I created a complete design style guide. The guide can be seen as a
                        company’s mood board and standard for future products and marketing materials.
                    </p>
                    <div className="medforall-spacer" />
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="medforall-design-system-img" src={ medforallDesignSystem } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                    <div className="medforall-spacer" />
                    <p>
                        As a fast-paced startup, we step into the next stage immediately. We decided to build a website
                        for increasing the popularity and expanding the team. I started with sketching out the sitemap
                        to organize the information and visualized the structure.
                    </p>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="medforall-marketing-website-flow-img" src={ medforallMarketingWebsiteFlow } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                    <p>
                        Each page has a focal point. Different types of the audience can get the most targeted information they are looking for.
                        <br /><br />
                        It is necessary to make the website responsively. I explore different layouts on multiple screen sizes.
                        My principle is to keep an identical flow across devices and integrally display every piece of information.
                        I iterated layouts for different screen sizes and found the most balanced one.
                    </p>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="medforall-marketing-website-prototype-img" src={ medforallMarketingWebsitePrototype } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                </div>
                <hr className="medforall-hr" />
                <div className="medforall-development-container">
                    <p>
                        With a little bit of coding experience, I put my hands on developing the website into production. It was a challenge for me to align the design and the product.
                        <br /><br />
                        I spent a lot of time learning from online open resources to find the best solutions and did tons of test runs.
                        <br /><br />
                        There is always something I can’t fix, so I seek help from our engineers. Collaborating with them helped me define the problem more accurately.
                        <br /><br />
                        If I still can’t get the effect, I went back to design files and explore alternatives that can accomplish the same purpose.
                    </p>
                    <FadeIn>
                        {onload => (
                            <div>
                                <img className="medforall-web-ui-img" src={ medforallWebUI } onLoad={onload} />
                                <img className="medforall-web-code-img" src={ medforallWebCode } onLoad={onload} />
                            </div>
                        )}
                    </FadeIn>
                </div>
                <hr className="medforall-hr" />
                <div className="medforall-development-container">
                    <h2>Conclusion</h2>
                    <p>
                        I joined Medforall as my first full-time job after graduation. I am glad about having this opportunity
                        to develop the company’s brand identity. It was a valuable experience in applying multiple skill sets
                        to accomplish different projects. These are significant steps for this startup and also for myself,
                        and this is just the beginning.
                    </p>
                </div>
                <NavFooter />
            </div>
        );
    }
}

export default Medforall;