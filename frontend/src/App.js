import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import 'holderjs';

import Welcome from "./components/welcome.js"
import PhotoMap from "./components/photo-map.js"
import PhotoList from "./components/photo-list.js"
import UsersList from "./components/users-list.js"
import Login from "./components/login.js"

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">
          <img src="mapmorylogo.png" width="200"></img>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/photomap">Photo Map</Nav.Link>
          <Nav.Link href="/photolist">Photo List</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          { user ? (
            <Nav.Link onClick={logout}>Logout {user.name}</Nav.Link>
          ):(
            <Nav.Link href="/login">Login</Nav.Link>
          )}
        </Nav>
      </Navbar>

      <div className="m-5">
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/photomap" element={<PhotoMap props/>} />
          <Route path="/photolist" element={<PhotoList props/>} />
          <Route path="/search" element={<UsersList/>} />
          <Route path="/login" element={<Login props/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
