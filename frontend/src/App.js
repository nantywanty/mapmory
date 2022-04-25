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
import Footer from "./components/footer.js";

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
        this.getMetaData = this.getMetaData.bind(this);
    }

    //Main functions

    componentDidMount() { 
        this.loadUser();
    }

    async loadUser() {  

        //Search local storage to find logged in user

        const loggedInUser = JSON.parse(localStorage.getItem('mapmoryUser'));
        if (loggedInUser && loggedInUser.tokenObj.expires_at > Date.now()) {
            this.setUser(loggedInUser);
            console.log('loaded user from local storage')
            console.log(loggedInUser)
        }
    }

    //Functions for components
    
    async setUser(loggedInUser) { 
        this.setState({ user: loggedInUser})
        
        if(loggedInUser) {
            //Load user's photos from MongoDB

            const queryGetUser = `query Query($id: String!){
                getUser(userId: $id) {
                    id 
                    name
                    photos {
                        name id date
                        location { lng lat }
                    }
                }
            }`;

            const varGetUser = { id: loggedInUser.googleId};
            // console.log(loggedInUser.googleId);
            
            const result = await graphQLFetch(queryGetUser, varGetUser);
            // console.log(result.getUser);
            if (result.getUser) {
                this.setState({ photos: result.getUser.photos });
            } else {
                this.setState({ photos: [] });

                const varAddUser = {
                    user: {
                        id: loggedInUser.googleId,
                        name: loggedInUser.profileObj.name,
                        photos: []
                    }
                }

                const queryAddUser = `mutation AddUser($user: UserInput!){
                    addUser(user: $user) {
                        id 
                    }
                }`;

                await graphQLFetch(queryAddUser, varAddUser)
            }
        }
    }
    
    async getMetaData(photo) {
        const queryGetMetaData = `query GetMetaData($accessToken: String! $id: String!) {
            getMetaData(accessToken: $accessToken, id: $id) {
                date location {
                  lat lng
                }  
            }
        }`;

        if (photo.location) return photo;
            else {
                const varGetMetaData = {
                    accessToken: this.state.user.accessToken,
                    id: photo.id,
                }
                const res = await graphQLFetch(queryGetMetaData, varGetMetaData);
                console.log(res);
                const photoWithMetaData = {
                    name: photo.name,
                    id: photo.id,
                    date: res.getMetaData.date,
                    location: res.getMetaData.location,
                }
                return photoWithMetaData;
            }
    }

    async setPhotos(photos) {
        // console.log("setting photo");
        const photosWithMetaData = Promise.all(photos.map(this.getMetaData));
        // console.log(await photosWithMetaData);
        // console.log("setting user");
        const varSetUser = {
            user: {
                id: this.state.user.googleId,
                name: this.state.user.profileObj.name,
                photos: await photosWithMetaData,
            }
        }

        const querySetUser = `mutation SetUser($user: UserInput!){
            setUser(user: $user) {
                id 
            }
        }`;

        await graphQLFetch(querySetUser, varSetUser)
        this.loadUser();
    }

    //Render

    render() {
        return (
        <div className="App" style={{
            backgroundImage: `url("https://cdn.hovia.com/app/uploads/paris-city-street-map-illustrated-landmarks-wallpaper-mural-Plain-scaled.jpg")`,
            // backgroundImage: `url("")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '1500px',
        }}>
            <Navbar bg="white" variant="light">
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
    
            <div className="m-5" >
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
            <div className="pt-3"/>
            <Footer />
        </div>
        );
    }
}

export default App;