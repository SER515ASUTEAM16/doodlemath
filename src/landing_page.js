/*;=============================================================================
; Title:   Doodlemath BY TEAM 16
; Authors:
           Amit Pandey         (apande36)    Mail:apande36@asu.edu

;Version:  Version 1.1
;==================================================================================
 */

//Teacher class

import React from 'react'
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
        this.state = {                                      //Student List variable created
            students: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/teacher/getAllStudentsInGrade/1-5')
            .then(r => r.json())
            .then((data) => {
                this.setState({students: data})
            })
    }


    render() {
        return (
            <div class="teacher">
                <h3 align="left">Students in grade: </h3>
                <MuiThemeProvider>
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
                    </div>
                </MuiThemeProvider>

                <h3 align="left">Create new assignment:</h3>
                <div>
                    <TextField
                        id="outlined-textarea"
                        label="Title"
                        placeholder="Title of the assignment"
                        multiline
                        margin="normal"
                        variant="outlined"
                        style={assignmentCreation}
                    />
                    <br/>
                    <TextField
                        id="outlined-textarea"
                        label="Description"
                        placeholder="Description of the assignment"
                        multiline
                        margin="normal"
                        variant="outlined"
                        rows="5"
                        style={assignmentCreation}
                    />
                </div>
            </div>

        )
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
    width: '50%'
};

export default Teacher;
