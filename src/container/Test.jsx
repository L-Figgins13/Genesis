import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../../client/auth.js';
import {Route, Switch, Redirect, BrowserRouter, Link} from 'react-router-dom';

import TestArea from '../blocks/TestArea';

export default class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            deck:[],
            testString: ''
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        fetch('/test/deck', {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {
            console.log(JSON.stringify(response.body));
            response.json()
                .then(data => {
                    console.log('logging json data', data);
                    this.setState({testString: data.testString});
                })
                .catch(err => {
                    console.log(err);
                })
        })
    }

    render() {
        return (
            <TestArea
                deck = {this.state.testString}
            />
        )
    }
}