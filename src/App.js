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
import IntermediateGrade from "./blocks/IntermediateGrade"
import AdvancedGrade from "./blocks/AdvancedGrade";
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Teacher from "./Teacher";
import Register from "./Register";
import Assignment_list from "./Assignment_list";
//setting paths and routes, assigning buttons and values to them


function UserLogin(props) {

    if (props.role === "teacher") {
        return (<Teacher grade={props.grade} author={props.name}/>)
    } else if (props.role === "student") {
        if (props.grade === "1-5") {
            return (<Assignment_list name={props.name}/>)
        } else if (props.grade === "6-8") {
            return (<Assignment_list name={props.name} />)
        }
        if (props.grade === "9-12") {
            return (<Assignment_list name={props.name}/>)
        } else {
            return (<h1>Invalid grade</h1>)
        }
    } else {
        return (<h1>Invalid role</h1>)
    }
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
                <RaisedButton label="Log In" primary={true} onClick={props.onClick}/>
                <br/>
                <br/>
                <RaisedButton label="Create new Account" primary={true} onClick={props.handleRegister}/>
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
        this.handleRegister = this.handleRegister.bind(this);

        this.state = {
            isLoggedIn: false,
            userName: '',
            password: '',
            userRole: '',
            grade: '',
            registerFlag: false
        };
    }

    //When LOGIN is pressed
    handleLoginClick(e) {
        const isEmail = this.state.userName.includes("@");
        if (isEmail) {
            let input = {
                email: this.state.userName,
                password: this.state.password
            };
            fetch('http://localhost:8080/auth/loginByEmail', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(input)
            }).then(r => r.json())
                .then((data) => {
                    console.log(data);
                    if (data.email === this.state.userName) {
                        this.setState({
                            isLoggedIn: true,
                            userRole: data.role,
                            grade: data.grade
                        });
                            console.log("Login success");
                    }
                })
        } else {
            let input = {
                name: this.state.userName,
                password: this.state.password
            };

            fetch('http://localhost:8080/auth/loginByName', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(input)
            }).then(r => r.json())
                .then((data) => {
                    console.log(data);
                    if (data.name === this.state.userName) {
                        this.setState({
                            isLoggedIn: true,
                            userRole: data.role,
                            grade: data.grade
                        });
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

    handleRegister() {
        if (this.state.registerFlag) {
            this.setState({registerFlag: false});
        } else if (!this.state.registerFlag) {
            this.setState({registerFlag: true});
        }
    }

    render() {                                          //prints LOGIN UI
        if (this.state.isLoggedIn === false) {
            return (
                <div className="App">
                    <header className="App-header">
                        <span>
                            <img src="logo.png" style={{height: "40px"}}/>
                            <span style={{position: 'absolute', top: '12px', marginLeft: '10px'}}>DoodleMath</span>
                        </span>
                    </header>
                    {this.displayMenu()}
                </div>
            );
        } else {
            return (
                <div className="App">
                    <header className="App-header">
                        <span>
                            <img src="logo.png" style={{height: "40px"}}/>
                            <span style={{position: 'absolute', top: '12px', marginLeft: '10px'}}>DoodleMath</span>
                        </span>
                    </header>
                    <UserLogin name={this.state.userName} grade={this.state.grade} role={this.state.userRole}/>
                </div>
            );
        }
    }

    displayMenu() {
        if (this.state.registerFlag) {
            return <Register handleRegister={this.handleRegister}/>
        }
        return <GustLogin
            username={this.state.userName}
            password={this.state.password}
            onUserChange={this.handleUserNameInput}
            onPassChange={this.handlePassInput}
            onClick={this.handleLoginClick}
            handleRegister={this.handleRegister}
        />
    }
}

export default LoginControl;
