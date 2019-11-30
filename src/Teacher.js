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

import React from 'react'
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import TextField from '@material-ui/core/TextField';


class Teacher extends React.Component {

    constructor(props) {
        super(props);
        this.handleQuestionInput = this.handleQuestionInput.bind(this);

        this.state = {                                      //Student List variable created
            //students: []
            title: '',
            question: '',
            questions: '',
            dueDate: '',
            grade: '',
            author: ''
        };
    }

    /*
        componentDidMount() {
            fetch('http://localhost:8080/teacher/getAllStudentsInGrade/1-5')
                .then(r => r.json())
                .then((data) => {
                    this.setState({students: data})
                })
        }
    */


    render() {
        return (
            <div class="teacher">
                <MuiThemeProvider>
                    <h3 style={{margin: 10}} align="left">Create new assignment:</h3>
                    <div align='left'>
                        <TextField
                            id="outlined-textarea"
                            label="Title"
                            placeholder="Title of the assignment"
                            margin="normal"
                            variant="outlined"
                            style={assignmentCreation}
                        /><br/>
                        <TextField
                            id="outlined-textarea"
                            label="Enter question"
                            placeholder="Enter question followed by answer"
                            margin="normal"
                            variant="outlined"
                            rows="5"
                            style={assignmentCreation}
                            onChange={this.handleQuestionInput}
                        /><br/>
                        <RaisedButton style={{margin: 10}} onClick={this.updateQuestions}>Add</RaisedButton>
                        <RaisedButton style={{margin: 10}}>Submit</RaisedButton>
                    </div>


                    {/*
                    <h3 align="left">Students in grade: </h3>

                    <div style={tableStyle}>
                        <Table>
                            <TableHeader editable="true">
                                <TableRow>
                                    <TableHeaderColumn align="center">ID</TableHeaderColumn>
                                    <TableHeaderColumn align="center">Name</TableHeaderColumn>
                                    <TableHeaderColumn align="center">Email</TableHeaderColumn>
                                    <TableHeaderColumn align="center">Grade</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {this.state.students.map(data => (
                                    <TableRow key={data.id}>
                                        <TableRowColumn align="center">{data.id}</TableRowColumn>
                                        <TableRowColumn align="center">{data.name}</TableRowColumn>
                                        <TableRowColumn align="center">{data.email}</TableRowColumn>
                                        <TableRowColumn align="center">{data.grade}</TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>*/}
                </MuiThemeProvider>
            </div>
        )
    }

    handleQuestionInput(e) {
        this.setState({question: e.target.value});
    }

    updateQuestions() {
        let tmp = this.state.questions + this.state.question;
        this.setState({
            questions: tmp
        })
    }
}


const tableStyle = {
    padding: '10px',
    margin: '10px',
    border: '2px solid black'
};

const assignmentCreation = {
    margin: '10px',
    border: '2px',
    width: '30%'
};

export default Teacher;
