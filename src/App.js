import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Resume from "./Resume";
import ProfileManagementForm from "./ProfileManagementForm";
import TemplateSelector from "./TemplateSelector";
import { Auth0Provider } from "@auth0/auth0-react";
function App() {
  return (
    <div className="App">
      <Auth0Provider
        domain="dev-cp6bim66jwhpa5k7.us.auth0.com"
        clientId="ux9orLoGSSijlogeYsDCSdlZar9rtuli"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Resume" element={<Resume />} />
          <Route exact path="/ProfileManagementForm" element={<ProfileManagementForm />} />
          <Route exact path="/TemplateSelector" element={< TemplateSelector/>} />
        </Routes>
      </BrowserRouter>
        </Auth0Provider>
    </div>
  );
}

export default App;
