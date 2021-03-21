import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <form class="form-inline">
                   
                    <Link to="/" className="navbar-brand"> <button class="btn btn-outline-success" type="button">TaskLog</button></Link>
                </form>

                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto" role="list" aria-labelledby="list-heading">
                        <li className="navbar-item">
                        <Link to="/report" className="nav-link"><button class="btn btn-sm btn-outline-secondary" type="button">Weekly Report</button></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
