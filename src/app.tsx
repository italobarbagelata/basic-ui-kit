import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom'
import All from "./All";

const routing = (
    <Router>
        <Switch>
            <Route path="/" component={All} />
        </Switch>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));