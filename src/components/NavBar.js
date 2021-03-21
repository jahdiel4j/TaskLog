import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <ul class="nav nav-tabs justify-content-center nav-fill">
                <li class="nav-item" role="presentation">
                    <Link class="nav-link border-3 bg-info" aria-current="page" data-bs-toggle="tab" to="/">Task Log</Link>
                </li>
                <li class="nav-item" role="presentation">
                    <Link class="nav-link border-3 bg-info" aria-current="page" data-bs-toggle="tab" to="/report">Report</Link>
                </li>
            </ul>
        );
    }
}
