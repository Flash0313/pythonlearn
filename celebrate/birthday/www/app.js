import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import HelloHandler from './hello.js';
import Love from './js/love.js';

let App = React.createClass({
    render() {
        return (
            <div className="nav">
                <Link to="app" className="homelink">Home  </Link>
                <Link to="hello" className="hellolink">  Say Hello</Link>
                <Link to="love" className="lovelink">  Love you</Link>
                {/* this is the importTant part */}
                <RouteHandler />
            </div>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="hello" path="/hello" handler={HelloHandler} />
        <Route name="love" path="/love" handler={Love} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
});