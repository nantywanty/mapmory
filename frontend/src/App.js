import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import 'holderjs';

// import graphQLFetch from './graphQLFetch.js';

import Welcome from "./components/welcome.js";
import PhotoMap from "./components/photo-map.js";
import PhotoList from "./components/photo-list.js";
import Login from "./components/login.js";

//GraphQL code

const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

async function graphQLFetch(query, variables = {}) {
  try {
    const response = await fetch('http://localhost:8000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ query, variables })
    });
    const body = await response.text();
    const result = JSON.parse(body, jsonDateReviver);

    if (result.errors) {
      const error = result.errors[0];
      if (error.extensions.code == 'BAD_USER_INPUT') {
        const details = error.extensions.exception.errors.join('\n ');
        alert(`${error.message}:\n ${details}`);
      } else {
        alert(`${error.extensions.code}: ${error.message}`);
      }
    }
    return result.data;
  } catch (e) {
    alert(`Error in sending data to server: ${e.message}`);
  }
}

//Main code

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

    //Functions

    componentDidMount() { 
        this.loadUser();
    }

    async loadUser() {  

        //Search local storage to find logged in user

        const loggedInUser = JSON.parse(localStorage.getItem('mapmoryUser'));
        if (loggedInUser) {
            this.setUser(loggedInUser);
        }
        
        //Load user's photos from MongoDB

        const query = `query Query($id: String!){
            getUser(id: $id) {
                userId 
                photos {
                    filename id date
                    location { lng lat }
                }
            }
        }`;

        const variables = { id: loggedInUser.googleId};
        
        const data = await graphQLFetch(query, variables);
        if (data) {
            // console.log(data.getUser.photos);
            this.setState({ photos: data.getUser.photos });
        }

    }

    setUser(loggedInUser) { //Sets the current user
        this.setState({ user: loggedInUser})
    }

    setPhotos(photos) {
        this.setState({ photos: photos})
        
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