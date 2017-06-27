import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Main } from '../components/Main';
import { Yoga } from '../components/Yoga';
import { Notes } from '../components/Notes';
import { About } from '../components/About';
import { Social } from '../components/Social';
import { Schedule } from '../components/Schedule';

const router = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='yoga' component={Yoga} />
            <Route path='notes' component={Notes} />
            <Route path='about' component={About} />
            <Route path='social' component={Social} />
            <Route path='schedule' component={Schedule} />
            <IndexRoute component={About} />
        </Route>
    </Router>
);

export { router };