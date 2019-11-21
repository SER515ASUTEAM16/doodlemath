/*;=============================================================================
; Title:   Doodlemath BY TEAM 16
; Authors: Akash Devdhar       (adevdhar)    Mail:adevdhar@asu.edu
           Amit Pandey         (apande36)    Mail:apande36@asu.edu
           Guru Preetam Kadiri (gkadiri)     Mail:gkadiri@asu.edu
           Lokesh Sharma       (lsharma6)    Mail:lsharma6@asu.edu
           Vineeth Chitteti    (vchittet)    Mail:vchittet@asu.edu

;Version:  Version 1.1
;==================================================================================
 */

//Teacher class

import React, {Component} from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Register extends Component {

    constructor(props) {
        super(props);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handleRoleInput = this.handleRoleInput.bind(this);
        this.handleUserNameInput = this.handleUserNameInput.bind(this);
        this.handlePassInput = this.handlePassInput.bind(this);
        this.handleGradeInput = this.handleGradeInput.bind(this);
        this.registerUser = this.registerUser.bind(this);

        this.state = {
            userName: '',
            Email: '',
            password: '',
            userRole: '',
            grade: '',
        };
    }

    registerUser() {
        let input = {
            name: this.state.userName,
            email: this.state.Email,
            role: this.state.userRole,
            password: this.state.password,
            grade:this.state.grade
        };

        console.log(JSON.stringify(input))
        fetch('http://localhost:8080/auth/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(input)

        }).then(r => r.json())
            .then((data) => {
                console.log(data);
            })
    }


    //When username field changed
    handleUserNameInput(e) {
        this.setState({userName: e.target.value});
    }

    handleEmailInput(e) {
        this.setState({Email: e.target.value});
    }

    handleGradeInput(e) {
        this.setState({grade: e.target.value});
    }

    handleRoleInput(e) {
        this.setState({userRole: e.target.value});
    }

    //When password field changed
    handlePassInput(e) {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h2>Create new account</h2>
                    <TextField
                        value={this.state.userName}
                        onChange={this.handleUserNameInput}
                        hintText="Name"
                        floatingLabelText="Name"
                    />
                    <br/>
                    <TextField
                        value={this.state.Email}
                        onChange={this.handleEmailInput}
                        hintText="Email"
                        floatingLabelText="Email"
                    />
                    <br/>
                    <TextField
                        value={this.state.password}
                        onChange={this.handlePassInput}
                        type="password"
                        hintText="Choose a password"
                        floatingLabelText="Password"
                    />
                    <br/>
                    <TextField
                        value={this.state.userRole}
                        onChange={this.handleRoleInput}
                        hintText="Role"
                        floatingLabelText="Role(student / teacher)"
                    />
                    <br/>
                    <TextField
                        value={this.state.grade}
                        onChange={this.handleGradeInput}
                        hintText="Grade"
                        floatingLabelText="Enter your Grade(1-5 / 6-8 / 9-12)"
                    />
                    <br/>
                    <RaisedButton inputs={this.state} label="Register" primary={true} onClick={this.registerUser}/>
                    <br/>
                    <br/>
                    <RaisedButton label="Already a member" primary={true} onClick={this.props.handleRegister}/>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Register;
