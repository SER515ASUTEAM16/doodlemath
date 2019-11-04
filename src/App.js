import React, {useState} from 'react';
import './App.css';
import LowerGrade from "./blocks/LowerGrade";
import HigherGrade from "./blocks/HigherGrade"
import Advanced1 from "./blocks/Advanced1";
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

function UserLogin() {
    return (
        <div>
            <Router>
                <Route path="/grade1-5" component={LowerGrade}/>
                <Route path="/grade9-12" component={HigherGrade}/>
                <Route path="/Advanced1" component={Advanced1}/>
            </Router>
        </div>
    )
}

function GustLogin(props) {
    return (
        <MuiThemeProvider>
            <div>
                <h2>Sign in</h2>
                <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                />
                <br/>
                <TextField
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

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        if (this.state.isLoggedIn == false) {
            return (
                <div className="App">
                    <header className="App-header">
                        <p>Welcome to DoodleMath!</p>
                    </header>
                    <GustLogin onClick={this.handleLoginClick}/>
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
