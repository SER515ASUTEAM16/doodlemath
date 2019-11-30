/*;=============================================================================
; Title:   Doodlemath BY TEAM 16
; Authors:
           Amit Pandey         (apande36)    Mail:apande36@asu.edu

;Version:  Version 1.1
;==================================================================================
 */

//landing page class

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


class landing_page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {                                      //Student List variable created
            assignments: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/teacher/getAllStudentsInGrade/1-5')
            .then(r => r.json())
            .then((data) => {
                this.setState({assignments: data})
            })
    }


    render() {
        return (
            <div class="landing_page">
                <h3 align="left">Students in grade: </h3>
                <MuiThemeProvider>
                    <div style={tableStyle}>
                        <Table>
                            <TableHeader editable="false">
                                <TableRow>
                                    <TableHeaderColumn align="center">Assignment Number</TableHeaderColumn>
                                    <TableHeaderColumn align="center">Due Date</TableHeaderColumn>
                                    <TableHeaderColumn align="center">Status</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {this.state.assignments.map(data => (
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

export default landing_page;
