import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Football Animation'
        };
    }

    render() {
        return (
            <div className="containter">
                <img className="circle"/>
            </div>
        );
    }
}