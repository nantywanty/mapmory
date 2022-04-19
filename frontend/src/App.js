import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import 'holderjs';

import Welcome from "./components/welcome.js";
import PhotoMap from "./components/photo-map.js";
import PhotoList from "./components/photo-list.js";
import UsersList from "./components/users-list.js";
import Login from "./components/login.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      photos: [],
    }
    this.setUser = this.setUser.bind(this);
    this.setPhotos = this.setPhotos.bind(this);
  }

  //State Related Functions

  setUser(loggedInUser) { //Sets the current user
    this.setState({ user: loggedInUser})
  }

  setPhotos(photos) {
    this.setState({ photos: photos})
  }

  //Effect Hooks

  componentDidMount() { //Search local storage to find logged in user
    const loggedInUser = JSON.parse(localStorage.getItem('mapmoryUser'));
    if (loggedInUser) {
      this.setUser(loggedInUser);
    }
  }

  //Render

  render() {
    return (
      <div className="App">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">
            <img src="mapmorylogo.png" width="200"></img>
          </Navbar.Brand>
          <Navbar.Text>
            <Nav className="me-auto">
                <Nav.Link href="/photomap">Photo Map</Nav.Link>
                <Nav.Link href="/photolist">Photo List</Nav.Link>
            </Nav>
          </Navbar.Text>
          <Navbar.Collapse className="justify-content-end">
            <Login user={this.state.user} setUser={this.setUser}/>
          </Navbar.Collapse>
        </Navbar>
  
        <div className="m-5">
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/photomap" element={
              <PhotoMap 
                photos = {this.state.photos}
              />
            } />
            <Route path="/photolist" element={
              <PhotoList 
                user={this.state.user}
                photos = {this.state.photos} 
                setPhotos = {this.setPhotos}
              />
            } />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
