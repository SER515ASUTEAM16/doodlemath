/*;=============================================================================
; Title:   Doodlemath BY TEAM 16
; Authors:
           Amit Pandey         (apande36)    Mail:apande36@asu.edu
           Lokesh Sharma       (lsharma6)    Mail:lsharma6@asu.edu

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
import Button from "@material-ui/core/Button";


class Teacher_assignments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            assignments: [],
            user: props.name
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/teacher/getAssignments/' + this.state.user)
            .then(r => r.json())
            .then((data) => {
                this.setState({assignments: data})
            })
    }

    render() {
        return (
            <div class="Teacher_assignments">
                <h3 align="left">Assignments:</h3>
                <MuiThemeProvider>
                    <div style={tableStyle}>
                        <Table>
                            <TableHeader editable="false">
                                <TableRow>
                                    <TableHeaderColumn align="center">Assignment Title</TableHeaderColumn>
                                    <TableHeaderColumn align="center">Description</TableHeaderColumn>
                                    <TableHeaderColumn align="center">Result</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {this.state.assignments.map(data => (
                                    <TableRow key={data.id}>
                                        <TableRowColumn align="center">{data.title}</TableRowColumn>
                                        <TableRowColumn align="center">{data.description}</TableRowColumn>
                                        <TableRowColumn align="center">
                                            <Button variant="contained" color="primary" value={data.id} onClick={this.loadAssignment}>
                                                Open
                                            </Button>
                                        </TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </MuiThemeProvider>

            </div>
        )
    }

    loadAssignment(e) {
        console.log(e.target.value);
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

export default Teacher_assignments;
