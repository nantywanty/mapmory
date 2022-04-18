import React from "react";
import { Form, Button, NavDropdown } from 'react-bootstrap';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import * as Icon from 'react-bootstrap-icons';

function Login(props) {

    const logout = () => {
        console.log("Logged out");
        props.setUser(null);
    }
    const success = (response) => {
        console.log("Login success");
        console.log(response);
        props.setUser(response);
    }
    const fail = () => {
        console.log("Login failed");
    }

    return (
        <div className="App">
            
                { props.user ? (
                    <NavDropdown title={
                        <img src={props.user.profileObj.imageUrl} className="rounded-circle" height={40}/>      
                    } 
                    align="end" color="red">
                        <NavDropdown.Item>Signed in as {props.user.profileObj.name}</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <GoogleLogout
                                clientId="772696188730-p05amocg6bvnn2v2ur4co7k1mq2ujmte.apps.googleusercontent.com"
                                buttonText="Sign out"
                                onLogoutSuccess={logout}
                            />
                        </NavDropdown.Item>
                    </NavDropdown>
                ) : (
                    <NavDropdown title={
                        <Icon.PersonCircle size={40} color="grey"/>
                    } 
                    align="end" color="red">
                        <NavDropdown.Item>Guest</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <GoogleLogin
                                clientId="772696188730-p05amocg6bvnn2v2ur4co7k1mq2ujmte.apps.googleusercontent.com"
                                buttonText="Sign in with Google"
                                onSuccess={success}
                                onFailure={fail}
                                // cookiePolicy={'single_host_origin'}
                            />
                        </NavDropdown.Item>
                    </NavDropdown>
                )}
        </div>
    )
}

export default Login;