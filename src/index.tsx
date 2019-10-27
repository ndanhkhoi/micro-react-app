import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import singleSpaReact from 'single-spa-react';
import * as serviceWorker from './serviceWorker';
import { appName } from './micro-app/utils';

ReactDOM.render(<App />, document.getElementById(appName));

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    domElementGetter: () => document.getElementById(appName) as Element
});

export const bootstrap = [
    reactLifecycles.bootstrap
];

export const mount = [
    reactLifecycles.mount
];

export const unmount = [
    reactLifecycles.unmount
];

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
