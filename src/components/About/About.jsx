import React from "react";

import Header from "../Header/Header";

import './About.scss';

import yyq from '../../img/yyq.png';

class About extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="about-flex-container">
                    <img className="about-flex-item" src={ yyq } />
                    <div className="about-flex-item">
                        <div className="about-header">
                            Hi, I am <mark className="pink">Yunqing Yi</mark>.<br />
                            Very nice to meet you!
                        </div>
                        <p>
                            I am a UI/UX designer, currently working for a healthcare company in Columbus, OH. I was born
                            and raised in Shanghai, China. I came to U.S. for my undergraduate and graduate education
                            in Design and have been here for 8 years.<br /><br />
                            I like traveling and learning different culture and habitude. I have been to over 15 countries
                            and enjoyed those unfamiliar but attractive atmospheres they brought to me.<br /><br />
                            Although in this hard year 2020, I didn’t stop exploring my life. I have a new teammate join me
                            with the advanture, Dodo, a four months old corgi puppy. We are ready to welcome any
                            opportunities which can let us explore more to this world and in ourselfves.<br /><br />
                        </p>
                        <p>
                            If you are interested to connect, please email to <mark className="pink">yiyq43@gmail.com</mark><br />
                            Thank you very much for stopping by and looking forward to keep in touch!
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;