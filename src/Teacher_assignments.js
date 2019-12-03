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
import RaisedButton from 'material-ui/RaisedButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Button from "@material-ui/core/Button";
import Teacher from "./Teacher";
import ViewAssign from "./ViewAssign";


class Teacher_assignments extends React.Component {

    constructor(props) {
        super(props);

        this.loadAssignment = this.loadAssignment.bind(this);
        this.loadCreateAssign = this.loadCreateAssign.bind(this);

        this.state = {
            id: '',
            assignments: [],
            user: props.name,
            openFlag: false,
            createFlag: false
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
        if (!this.state.openFlag && !this.state.createFlag) {
            return (
                <div class="Teacher_assignments">
                    <h3 align="left">Assignments:</h3>
                    <MuiThemeProvider>
                        <RaisedButton style={{width: 200}} primary={true} variant="contained" onClick={this.loadCreateAssign}>
                            Create Assignment
                        </RaisedButton>
                        <div style={tableStyle}>
                            <Table>
                                <TableHeader displaySelectAll={false} adjustForCheckbox={false} editable="false">
                                    <TableRow>
                                        <TableHeaderColumn align="center">Assignment Title</TableHeaderColumn>
                                        <TableHeaderColumn align="center">Description</TableHeaderColumn>
                                        <TableHeaderColumn align="center">View Submissions</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}>
                                    {this.state.assignments.map(data => (
                                        <TableRow key={data.id}>
                                            <TableRowColumn align="center">{data.title}</TableRowColumn>
                                            <TableRowColumn align="center">{data.description}</TableRowColumn>
                                            <TableRowColumn align="center">
                                                <Button value={data.id} onClick={this.loadAssignment}>
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
        } else if (this.state.createFlag) {
            return (
                <Teacher grade={this.props.grade} author={this.state.user}/>
            )
        } else {
            return (<ViewAssign grade={this.props.grade} name={this.state.user} id={this.state.id}/>)
        }
    }

    loadAssignment(e) {
        console.log(e.target.value);
        if(e.target.value !== undefined){
            this.setState({
                id: e.target.value,
                openFlag: true,
                createFlag: false
            })

        }
    }

    loadCreateAssign(e) {
        this.setState({
            openFlag: false,
            createFlag: true
        })
    }



}

const tableStyle = {
    padding: '10px',
    margin: '10px',
    border: '2px solid black'
};

const btnStyle = {
    justifyContent: 'center',
    align: 'right'
};

export default Teacher_assignments;
