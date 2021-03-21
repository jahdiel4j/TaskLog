import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <ul class="nav nav-tabs justify-content-center nav-fill">
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/">Task Log</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/report">Report</Link>
                </li>
            </ul>
        );
    }
}
