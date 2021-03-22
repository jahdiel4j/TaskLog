import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class Navbar extends Component {

    render() {
        return (
            <ul class="nav nav-tabs justify-content-center nav-fill">
                <li class="nav-item" role="presentation">
                    <Link class="nav-link border-3 bg-warning" aria-current="page" data-bs-toggle="tab" to="/">Title</Link>
                </li>
                <li class="nav-item" role="presentation">
                    <Link class="nav-link border-3 bg-warning" aria-current="page" data-bs-toggle="tab" to="/task">Task Log</Link>
                </li>
                <li class="nav-item" role="presentation">
                    <Link class="nav-link border-3 bg-warning" aria-current="page" data-bs-toggle="tab" to="/report">Report</Link>
                </li>
            </ul>
        );
    }
}