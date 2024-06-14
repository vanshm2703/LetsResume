import  React from "react";
import  "./pages/pages.css";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, logout, user,isAuthenticated } = useAuth0();
  return (
  <div id="btn">
    { isAuthenticated ?  (
   < button className="log" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >
   Log Out
   </button>
   ) : (
      <button className="log" onClick={() => loginWithRedirect()}>Log In</button> )
   }
  </div>

)
};

export default LoginButton