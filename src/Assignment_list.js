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


class Assignment_list extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            assignments: [],
            user: props.name
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/student/'+ this.state.user +'/getAssignments')
            .then(r => r.json())
            .then((data) => {
                this.setState({assignments: data})
            })
    }

    loadAssignment(e) {
        console.log(e.target.value);
    }

    render() {
        return (
            <div class="Assignment_list">
                <h3 align="left">assignments: </h3>
                <MuiThemeProvider>
                    <div style={tableStyle}>
                        <Table>
                            <TableHeader editable="false">
                                <TableRow>
                                    <TableHeaderColumn align="center">Assignment Name</TableHeaderColumn>
                                    <TableHeaderColumn align="center">Due Date</TableHeaderColumn>
                                    <TableHeaderColumn align="center">Status</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {this.state.assignments.map(data => (
                                    <TableRow key={data.id}>
                                        <TableRowColumn align="center">{data.title}</TableRowColumn>
                                        <TableRowColumn align="center">{data.dueDate}</TableRowColumn>
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

export default Assignment_list;
