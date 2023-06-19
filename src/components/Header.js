import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({active}) => {
    return (
        <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" to='/'>JobHuntly</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to='/findjob' className={"nav-link ".concat(active === 'find'?'active':'')} aria-current="page" href="#">FindJobs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/browsecompanies' className={"nav-link ".concat(active === 'browse'?'active':'')} >Browse Companies</Link>
                    </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <Link className="btn" type="submit">Login</Link>
                        <Link className="btn" type="submit">Sign Up</Link>
                    </form>
                </div>
            </div>
        </nav>
        </header>
    )
}

export default Header
