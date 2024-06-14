import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const Home = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto text-center">
          <h1>Welcome to Let's Resume</h1>
          <p className="lead">
            Create professional resumes with ease. Our resume builder helps you design and build resumes that stand out to employers.
          </p>
          <button className="btn btn-primary me-2" onClick={() => loginWithRedirect()}>
            Log In
          </button>
          <button className="btn btn-secondary" onClick={() => loginWithRedirect()}>
            Register
          </button>
        </div>
      </div>
    </div>





    )
}



export default Home;
