import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Navigation from './components/Navigation';

const App = () => (
    <BrowserRouter>
        <Navigation />
        <div>
            <Switch>
                <Route path="/home" component={ HelloWorld } />
                <Route exact path="/" component={ HelloWorld } />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
