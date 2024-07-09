import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./pages.css";
import logo from "./logo.png";

const NavbarTab = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLinkClick = (e, path) => {
    if (!isAuthenticated) {
      e.preventDefault();
      alert("Please log in to continue.");
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-none" id="nav">
      <div className="container-fluid">
        <img src={logo} className="logo" alt="logo" />
        <Link className="navbar-brand" to="/">
          <h3 id="title">
            <strong>Let's Resume</strong>
          </h3>
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/ProfileManagementForm"
                onClick={(e) => handleLinkClick(e, "/ProfileManagementForm")}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              {isAuthenticated ? (
                <button 
                  className="nav-link btn btn-link"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  <i className="fa-solid fa-right-to-bracket fa-xl"></i> 
                </button>
              ) : (
                <button 
                  className="nav-link btn btn-link"
                  onClick={() => loginWithRedirect()}
                >
                  <i className="fa-solid fa-right-to-bracket fa-2xl"></i> 
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTab;
