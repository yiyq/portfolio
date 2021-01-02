import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path='/' component={() => {
                            window.location.href = 'https://yunqingyi.webflow.io/';
                            return null;
                        }}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
