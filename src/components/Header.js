import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({active}) => {
    return (
        <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <Link class="navbar-brand" to='/'>JobHuntly</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to='/findjob' class={"nav-link ".concat(active === 'find'?'active':'')} aria-current="page" href="#">FindJobs</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/browsecompanies' class={"nav-link ".concat(active === 'browse'?'active':'')} >Browse Companies</Link>
                    </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <Link class="btn" type="submit">Login</Link>
                        <Link class="btn" type="submit">Sign Up</Link>
                    </form>
                </div>
            </div>
        </nav>
        </header>
    )
}

export default Header
