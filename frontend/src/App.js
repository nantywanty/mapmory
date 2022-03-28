import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <nav className="navbar navbar-expand navbar-light bg-light">
        <a href="/" className="navbar-brand">
          Mapmory
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/photomap"} className="nav-link">
              Photo Map
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/photolist"} className="nav-link">
              Photo List
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/search"} className="nav-link">
              Search
            </Link>
          </li>
          <li className="nav-item" >
            { user ? (
              <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.name}
              </a>
            ) : (            
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
            )}

          </li>
        </div>
      </nav>

      <div className="container mt-3">
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
