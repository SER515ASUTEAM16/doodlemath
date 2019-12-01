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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
                    <br/>
                    <FormControl  component="fieldset">
                        <FormLabel component="legend">Role</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="student" onChange={this.handleRoleInput} control={<Radio />} label="Student" />
                            <FormControlLabel value="teacher" onChange={this.handleRoleInput} control={<Radio />} label="Teacher" />
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <br/>
                    <FormControl component="legend">
                        <FormLabel component="legend">Grade</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="1-5" onChange={this.handleGradeInput} control={<Radio />} label="Beginner (Grade 1-5)" />
                            <FormControlLabel value="6-8" onChange={this.handleGradeInput} control={<Radio />} label="Intermediate (Grade 5-8)" />
                            <FormControlLabel value="9-12" onChange={this.handleGradeInput} control={<Radio />} label="Advanced (Grade 9-12)" />
                        </RadioGroup>
                    </FormControl>
                    <br/>
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
