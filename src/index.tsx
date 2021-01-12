import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@redux/index';
import { BrowserRouter as Router } from 'react-router-dom';
import routeConfig from '@routes/config';
import Layout from './layout';
import './styles/index.less';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Layout routes={routeConfig} />
        </Router>
    </Provider>,
    document.getElementById('app'),
);
