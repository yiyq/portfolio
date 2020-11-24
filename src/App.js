import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from "./components/Home/Home";

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Switch>
                    <Route path="/proj1">
                        <Proj1 />
                    </Route>
                    <Route path="/proj2">
                        <Proj2 />
                    </Route>
                    <Route path="/proj3">
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

function Proj1(){
    return <h2>Proj1</h2>;
}

function Proj2(){
    return <h2>Proj2</h2>;
}

function Proj3(){
    return <h2>Proj3</h2>;
}

export default App;
