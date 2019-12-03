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
        this.handleSolutionInput = this.handleSolutionInput.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.updateQuestions = this.updateQuestions.bind(this);
        this.createAssignment = this.createAssignment.bind(this);
        this.state = {                                      //Student List variable created
            title: '',
            question: '',
            solution: '',
            questions: [],
            dueDate: '',
            grade: props.grade,
            author: props.author
        };
    }

/*    componentDidMount() {
        fetch('API to load students who submitted the assignment NEEDED!!!')
            .then(r => r.json())
            .then((data) => {
                this.setState({
                })
            })
    }*/


    render() {
        return (

            <div class="teacher">                           {/*teacher ui*/}
                <MuiThemeProvider>
                    <Table>
                        <TableHeader editable="true">
                            <TableRow>
                                <TableHeaderColumn align="center">Questions</TableHeaderColumn>
                                <TableHeaderColumn align="center">Result</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {this.state.questions.map((data) => (
                                <TableRow>
                                    <TableRowColumn align="center">{data.question}</TableRowColumn>
                                    <TableRowColumn align="center">{data.solution}</TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <h3 style={{margin: 10}} align="left">Create new assignment:</h3>
                    <div align='left'>
                        <TextField
                            id="outlined-textarea"
                            label="Title"
                            placeholder="Title of the assignment"
                            margin="normal"
                            variant="outlined"
                            style={assignmentCreation}
                            onChange={this.handleTitle}
                        /><br/>
                        <TextField
                            id="outlined-textarea"
                            label="Enter question"
                            placeholder="Enter question followed by answer"
                            margin="normal"
                            variant="outlined"
                            rows="5"
                            style={assignmentCreation}
                            value={this.state.question}
                            onChange={this.handleQuestionInput}
                        /><br/>
                        <TextField
                            id="outlined-textarea"
                            label="Enter solution"
                            placeholder="Enter question followed by answer"
                            margin="normal"
                            variant="outlined"
                            rows="5"
                            style={assignmentCreation}
                            value={this.state.solution}
                            onChange={this.handleSolutionInput}
                        /><br/>
                        <RaisedButton style={{margin: 10}} onClick={this.updateQuestions}>Add</RaisedButton>
                        <RaisedButton style={{margin: 10}} onClick={this.createAssignment}>Submit</RaisedButton>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }

    //When question is updated
    updateQuestions() {
        this.setState({
            questions: [this.state.questions, {
                question: this.state.question,
                solution: this.state.solution
            }].flat()
        })
        this.setState({question: ''})
        this.setState({solution: ''})
        console.log(this.state.questions)
    }

    //When question is input
    handleQuestionInput(e) {
        this.setState({question: e.target.value});
    }

    //When solution is input
    handleSolutionInput(e) {
        this.setState({solution: e.target.value});
    }

    //Handles title
    handleTitle(e) {
        this.setState({title: e.target.value});
    }

    //Creating assignments
    createAssignment() {
        let description = ''
        let solution = ''
        for (let i = 0; i < this.state.questions.length; i++) {
            let data = this.state.questions[i];
            description += data.question;
            solution += data.solution;
            if (i < this.state.questions.length - 1) {
                description += ';';
                solution += ';';
            }
        }
        let assignment = {
            title: this.state.title,
            description: description,
            solution: solution,
            author: this.state.author,
            grade: this.state.grade,
            deadline: new Date().toLocaleDateString()
        }
        console.log(JSON.stringify(assignment));
        fetch('http://localhost:8080/teacher/createAssignment', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(assignment)

        }).then(r => {r.json()
            if (r.status == 200) {
                alert("Assignment created Successfully");
            }
        }).then((data) => {
                console.log(data);
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
