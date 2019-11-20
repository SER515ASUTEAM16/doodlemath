/*;=============================================================================
; Title:   Doodlemath BY TEAM 16
; Authors: Lokesh Sharma       (lsharma6)    Mail:lsharma6@asu.edu
           Amit Pandey         (apande36)    Mail:apande36@asu.edu
           Vineeth Chitteti    (vchittet)    Mail:vchittet@asu.edu
           Akash Devdhar       (adevdhar)    Mail:adevdhar@asu.edu
           Guru Preetam Kadiri (gkadiri)     Mail:gkadiri@asu.edu
;Version:  Version 1.1
;==================================================================================
 */

//FRONT END blocks


import React from 'react';
import './App.css';
import LowerGrade from "./blocks/LowerGrade";
import HigherGrade from "./blocks/HigherGrade"
import Advanced1 from "./blocks/Advanced1";
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Teacher from "./Teacher";

//setting paths and routes, assigning buttons and values to them


function UserLogin() {
    return (
        <div>
            <Router>
                <Route path="/grade1-5" component={LowerGrade}/>
                <Route path="/grade9-12" component={HigherGrade}/>
                <Route path="/Advanced1" component={Advanced1}/>
                <Link to="/grade1-5">
                    <button>Beginner</button>
                </Link>
                <Link to="/grade9-12">
                    <button>Intermediate</button>
                </Link>
                <Link to="/Advanced1">
                    <button>Advanced</button>
                </Link>
            </Router>
            <Teacher/>
        </div>
    )
}

//LOGIN PAGE UI
function GustLogin(props) {
    return (
        <MuiThemeProvider>
            <div>
                <h2>Sign in</h2>
                <TextField
                    value={props.username}
                    onChange={props.onUserChange}
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                />
                <br/>
                <TextField
                    value={props.password}
                    onChange={props.onPassChange}
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                />
                <br/>
                <RaisedButton label="Submit" primary={true} onClick={props.onClick}/>
            </div>
        </MuiThemeProvider>
    );
}

//CONTROL LOGIN EVENTS
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleUserNameInput = this.handleUserNameInput.bind(this);
        this.handlePassInput = this.handlePassInput.bind(this);

        this.state = {
            isLoggedIn: false,
            userName: '',
            password: ''
        };
    }

    //When LOGIN is pressed
    handleLoginClick(e) {
        const isEmail = this.state.userName.includes("@");
        if (isEmail) {
            let input = {
                email: this.state.userName,
                password: this.state.password
            }

            fetch('http://localhost:8080/auth/loginByEmail', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(input)
            }).then(r => r.json())
                .then((data) => {
                    console.log(data)
                    if (data.email === this.state.userName){
                        this.setState({isLoggedIn: true})
                        console.log("Login success");
                    }
                })
        }
    }

    //WHEN LOGOUT is pressed
    handleLogoutClick(e) {
        this.setState({isLoggedIn: false});
    }

    //When username field changed
    handleUserNameInput(e) {
        this.setState({userName: e.target.value});
    }

    //When password field changed
    handlePassInput(e) {
        this.setState({password: e.target.value});
    }

    render() {                                          //prints LOGIN UI
        if (this.state.isLoggedIn === false) {
            return (
                <div className="App">
                    <header className="App-header">
                        <p>Welcome to DoodleMath!</p>
                    </header>
                    <GustLogin
                        username={this.state.userName}
                        password={this.state.password}
                        onUserChange={this.handleUserNameInput}
                        onPassChange={this.handlePassInput}
                        onClick={this.handleLoginClick}
                    />
                </div>
            );
        } else {
            return (
                <div className="App">
                    <header className="App-header">
                        <p>Welcome to DoodleMath!</p>
                    </header>
                    <UserLogin/>
                </div>
            );
        }
    }
}

export default LoginControl;
