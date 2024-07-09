import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import step1 from "./step1.jpg";
import step2 from "./step2.jpg";
import step3 from "./step3.jpg";
import step4 from "./step4.jpg";
import step5 from "./step5.jpg";

const Home = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [showFirstLine, setShowFirstLine] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstLine((prev) => !prev); // Toggle between true and false
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="main">
      <header className="hero-section">
        <div className="container text-center">
          <h1 className="display-4">Build Your Professional Resume</h1>
          <p className="lead">
            {showFirstLine
              ? "Create a stunning resume in minutes with our easy-to-use resume builder."
              : "It's easy and completely free to use."}
          </p>
          <a className="btn btn-primary btn-lg" role="button">
            {isAuthenticated ? (
              <>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
                <Link to="/ProfileManagementForm" className="btn btn-success btn-lg ml-2">
                  Get Started
                </Link>
              </>
            ) : (
              <button
                className="btn btn-primary btn-lg"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
          </a>
          {isAuthenticated && (
            <div>
              <img src={user.picture} alt={user.name} />
              <h2>Welcome! {user.name}</h2>
              <p>{user.email}</p>
            </div>
          )}
        </div>
      </header>

      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="feature-box">
                <i className="fa-solid fa-user-pen fa-3x"></i>
                <h3>Easy to Use</h3>
                <p>Create your resume with our intuitive interface.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-box">
                <i className="fa-regular fa-file fa-3x"></i>
                <h3>Customizable Designs</h3>
                <p>Select from a range of professional customization options for your resume.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-box">
                <i className="fa-solid fa-download fa-3x"></i>
                <h3>Download & Share</h3>
                <p>Export your resume to PDF and share it easily.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="steps-section py-5 bg-none">
        <div className="container">
          <h2 className="text-center mb-5" id="head">How It Works</h2>
          <div className="row mb-4">
            <div className="col-md-6 text-center">
              <div className="step-box p-4">
                <h3>Step 1</h3>
                <p>Login to your account.</p>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={step1} alt="Step 1" className="img-fluid" />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6 text-center order-md-2">
              <div className="step-box p-4">
                <h3>Step 2</h3>
                <p>Enter your personal information.</p>
              </div>
            </div>
            <div className="col-md-6 text-center order-md-1">
              <img src={step2} alt="Step 2" className="img-fluid" />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6 text-center">
              <div className="step-box p-4">
                <h3>Step 3</h3>
                <p>Customize your resume with a range of colors and fonts to suit your style.</p>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={step3} alt="Step 3" className="img-fluid" />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6 text-center order-md-2">
              <div className="step-box p-4">
                <h3>Step 4</h3>
                <p>Download your resume.</p>
              </div>
            </div>
            <div className="col-md-6 text-center order-md-1">
              <img src={step4} alt="Step 4" className="img-fluid" />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6 text-center">
              <div className="step-box p-4">
                <h3>Step 5</h3>
                <p>Share on different platforms.</p>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={step5} alt="Step 5" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer py-3 text-white text-center">
        <div className="container">
          <p>All rights reserved</p>
          <button
            className="btn btn-secondary"
            onClick={() => window.scrollTo(0, 0)}
          >
            Back to top
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Home;