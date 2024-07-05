import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Resume from "./Resume";
import ProfileManagementForm from "./ProfileManagementForm";
import TemplateSelector from "./TemplateSelector";
import NavbarTab from "./NavbarTab";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarTab />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Resume" element={<Resume />} />
          <Route
            exact
            path="/ProfileManagementForm"
            element={<ProfileManagementForm />}
          />
          <Route
            exact
            path="/TemplateSelector"
            element={<TemplateSelector />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
