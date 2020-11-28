import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from "./components/Home/Home";
import StreamLabs from "./components/StreamLabs/StreamLabs";

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Switch>
                    <Route path="/streamLabs">
                        <StreamLabs />
                    </Route>
                    <Route path="/medforall">
                        <Proj2 />
                    </Route>
                    <Route path="/ohioathome">
                        <Proj3 />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}


function About() {
    return <h2>About</h2>;
}

function Proj2(){
    return <h2>Proj2</h2>;
}

function Proj3(){
    return <h2>Proj3</h2>;
}

export default App;
