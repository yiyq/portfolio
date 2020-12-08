import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from "./components/Home/Home";
import Medforall from "./components/Medforall/Medforall";
import ScrollToTop from "./components/Router/ScrollToTop";
import StreamLabs from "./components/StreamLabs/StreamLabs";
import Ohioathome from "./components/Ohioathome/Ohioathome";
import About from "./components/About/About";

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <ScrollToTop />
                    <Switch>
                        <Route path="/portfolio/streamLabs">
                            <StreamLabs />
                        </Route>
                        <Route path="/portfolio/medforall">
                            <Medforall />
                        </Route>
                        <Route path="/portfolio/ohioathome">
                            <Ohioathome />
                        </Route>
                        <Route path="/portfolio/about">
                            <About />
                        </Route>
                        <Route path="/portfolio">
                            <Home/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
