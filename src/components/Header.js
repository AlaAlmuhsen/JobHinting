import React from "react";
import { Link } from "react-router-dom";


const Header = ({ active }) => {
    let personData = JSON.parse(localStorage.getItem('userData'))[0];
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            JobHuntly
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/findjob"
                  className={"nav-link ".concat(
                    active === "find" ? "active" : ""
                  )}
                  aria-current="page"
                  href="#"
                >
                  FindJobs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/browsecompanies"
                  className={"nav-link ".concat(
                    active === "browse" ? "active" : ""
                  )}
                >
                  Browse Companies
                </Link>
              </li>
            </ul>
            {sessionStorage.getItem("userActive") === "true" ?
            (
                <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={personData.avatar} className="rounded-circle" height="22"
              alt="" loading="lazy" />
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item">Action</Link></li>
            <li><Link className="dropdown-item">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item">Something else here</Link></li>
          </ul>
        </li>
            //     <li className="nav-item me-3 me-lg-0 dropdown">
            //     <Link className="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-mdb-toggle="dropdown"
            //       aria-expanded="false">
            //       <img src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg" className="rounded-circle" height="22"
            //         alt="" loading="lazy" />
            //     </Link>

            //   </li>
            )
            :
            (
              <form className="d-flex" role="search">
                <Link to="/Login" className="btn" type="submit">
                  Login
                </Link>
                <Link className="btn" type="submit">
                  Sign Up
                </Link>
              </form>
              )
            }
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
