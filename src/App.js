import Adress from "./Component/Profile/Adress.js";
import FullName from "./Component/Profile/FullName.js";
import ProfilePhoto from "./Component/Profile/ProfilePhoto.js";
import NavbarProfile from "./Component/Profile/NavbarProfile.js";
import { Navbar, Card } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <NavbarProfile />
      <ProfilePhoto />
      <FullName />
      <Adress />
    </>
  );
}

export default App;
