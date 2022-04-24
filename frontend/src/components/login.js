import React from "react";
import { Form, Button, NavDropdown } from 'react-bootstrap';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import * as Icon from 'react-bootstrap-icons';

function Login(props) {
    
    const logout = () => {
        console.log("Logged out");
        props.setUser(null);
        localStorage.setItem('mapmoryUser', null)
    }
    const success = (response) => {
        console.log("Login success");
        // console.log(response);
        // console.log(response.profileObj.imageUrl);
        props.setUser(response);
        localStorage.setItem('mapmoryUser', JSON.stringify(response))
    }
    const fail = () => {
        console.log("Login failed");
    }

    //Login token example:
        // Ba: "107522378591908199170"
        // Lu: Nw
            // Bv: "nant.arun.etc@gmail.com"
            // TW: "107522378591908199170"
            // iY: "Nant"
            // rN: "https://lh3.googleusercontent.com/a-/AOh14GhEUFtg71fGoni77YBqSDUB09FGgLwtWRZw_f7ftQ=s96-c"
            // tf: "Nant Arunyawongsakorn"
            // wW: "Arunyawongsakorn"
        // accessToken: "ya29.A0ARrdaM_N6ZECMmjJ8dED_oQTE-fOOIrW700zmUNNWjUxuKuzobvL2td2L6bRB3Ni9ajZrFef_IHRTWwyPLfntYAB9SeXjzWi2Jno5A3oLSJkQO3YojSx9yyZ6DHriTO5b2Flwt7kyDQM3T4mFnTfueBYm6U3Rg"
        // googleId: "107522378591908199170"
        // profileObj:
            // email: "nant.arun.etc@gmail.com"
            // familyName: "Arunyawongsakorn"
            // givenName: "Nant"
            // googleId: "107522378591908199170"
            // imageUrl: "https://lh3.googleusercontent.com/a-/AOh14GhEUFtg71fGoni77YBqSDUB09FGgLwtWRZw_f7ftQ=s96-c"
            // name: "Nant Arunyawongsakorn"
        // tokenId: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQzMzJhYjU0NWNjMTg5ZGYxMzNlZmRkYjNhNmM0MDJlYmY0ODlhYzIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNzcyNjk2MTg4NzMwLXAwNWFtb2NnNmJ2bm4ydjJ1cjRjbzdrMW1xMnVqbXRlLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNzcyNjk2MTg4NzMwLXAwNWFtb2NnNmJ2bm4ydjJ1cjRjbzdrMW1xMnVqbXRlLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA3NTIyMzc4NTkxOTA4MTk5MTcwIiwiZW1haWwiOiJuYW50LmFydW4uZXRjQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiMTlwcnlBblU0NmY3anpvMWhoT0lXQSIsIm5hbWUiOiJOYW50IEFydW55YXdvbmdzYWtvcm4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2hFVUZ0ZzcxZkdvbmk3N1lCcVNEVUIwOUZHZ0x3dFdSWndfZjdmdFE9czk2LWMiLCJnaXZlbl9uYW1lIjoiTmFudCIsImZhbWlseV9uYW1lIjoiQXJ1bnlhd29uZ3Nha29ybiIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjUwNzMxNTMzLCJleHAiOjE2NTA3MzUxMzMsImp0aSI6IjhiMGU1ZDExNmIzZWZlZjhmZTVjZmMyODlhYmMyYzAxYjRhOWUwM2EifQ.jVjlOBmgW0NCnMtNFQfymtZ1Qz-jIXaJBB_WBXdr2x1rwpIyQVB5ZmqxL4Tt1KBS-dPF8FoJJf7Z-OOA2Jzf60VlawH7JPU4Rder-mHTY65DcXwZWJRok9w70pKHMjW7fCCTQTyXCZkNYnZn4uiBjI_oGfzDp-znrDP0ZSI-LBwAH-88IxuT54NVNM90hVPkUvbUUFoQ8TYWRz2SOGsN0of4GQFsVKQcL6g8RtfNr9o95DJmSKEKFMBTHKJVoh3OA8OUe1UcK7YFNDZq2KzHmXAu_IRjwDeZ3VBnd0vjzDsrfgJs1UoFyCr39JwF97r5sxhydYl2Ey9Dr_LptygH0Q"
        // tokenObj:
            // access_token: "ya29.A0ARrdaM_N6ZECMmjJ8dED_oQTE-fOOIrW700zmUNNWjUxuKuzobvL2td2L6bRB3Ni9ajZrFef_IHRTWwyPLfntYAB9SeXjzWi2Jno5A3oLSJkQO3YojSx9yyZ6DHriTO5b2Flwt7kyDQM3T4mFnTfueBYm6U3Rg"
            // expires_at: 1650735131518
            // expires_in: 3599
            // first_issued_at: 1650731532518
            // id_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQzMzJhYjU0NWNjMTg5ZGYxMzNlZmRkYjNhNmM0MDJlYmY0ODlhYzIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNzcyNjk2MTg4NzMwLXAwNWFtb2NnNmJ2bm4ydjJ1cjRjbzdrMW1xMnVqbXRlLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNzcyNjk2MTg4NzMwLXAwNWFtb2NnNmJ2bm4ydjJ1cjRjbzdrMW1xMnVqbXRlLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA3NTIyMzc4NTkxOTA4MTk5MTcwIiwiZW1haWwiOiJuYW50LmFydW4uZXRjQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiMTlwcnlBblU0NmY3anpvMWhoT0lXQSIsIm5hbWUiOiJOYW50IEFydW55YXdvbmdzYWtvcm4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2hFVUZ0ZzcxZkdvbmk3N1lCcVNEVUIwOUZHZ0x3dFdSWndfZjdmdFE9czk2LWMiLCJnaXZlbl9uYW1lIjoiTmFudCIsImZhbWlseV9uYW1lIjoiQXJ1bnlhd29uZ3Nha29ybiIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjUwNzMxNTMzLCJleHAiOjE2NTA3MzUxMzMsImp0aSI6IjhiMGU1ZDExNmIzZWZlZjhmZTVjZmMyODlhYmMyYzAxYjRhOWUwM2EifQ.jVjlOBmgW0NCnMtNFQfymtZ1Qz-jIXaJBB_WBXdr2x1rwpIyQVB5ZmqxL4Tt1KBS-dPF8FoJJf7Z-OOA2Jzf60VlawH7JPU4Rder-mHTY65DcXwZWJRok9w70pKHMjW7fCCTQTyXCZkNYnZn4uiBjI_oGfzDp-znrDP0ZSI-LBwAH-88IxuT54NVNM90hVPkUvbUUFoQ8TYWRz2SOGsN0of4GQFsVKQcL6g8RtfNr9o95DJmSKEKFMBTHKJVoh3OA8OUe1UcK7YFNDZq2KzHmXAu_IRjwDeZ3VBnd0vjzDsrfgJs1UoFyCr39JwF97r5sxhydYl2Ey9Dr_LptygH0Q"
            // idpId: "google"
            // login_hint: "AJDLj6JUa8yxXrhHdWRHIV0S13cAlXj5f6yf1s6sQ4pm2yDmASps6Bub89w-joiH4oR3y0jik_XUxTwv7FpZOXLnuahlKKxR1A"
            // scope: "email profile openid https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
            // session_state:
                // extraQueryParams: {authuser: '0'}
            // token_type: "Bearer"


    return (
        <div className="App">
            
                { props.user ? (
                    <NavDropdown title={
                        <img src={props.user.profileObj.imageUrl} className="rounded-circle" height={40}/>      
                    } 
                    align="end">
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
                    align="end">
                        <NavDropdown.Item>Guest</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <GoogleLogin
                                clientId="772696188730-p05amocg6bvnn2v2ur4co7k1mq2ujmte.apps.googleusercontent.com"
                                buttonText="Sign in with Google"
                                onSuccess={success}
                                onFailure={fail}
                            />
                        </NavDropdown.Item>
                    </NavDropdown>
                )}
        </div>
    )
}

export default Login;