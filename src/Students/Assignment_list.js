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
import RaisedButton from "material-ui/RaisedButton";
import AdvancedGrade from "./canvas/AdvancedGrade";
import IntermediateGrade from "./canvas/IntermediateGrade";
import LowerGrade from "./canvas/LowerGrade";


class Assignment_list extends React.Component {

    constructor(props) {
        super(props);
        this.navigateToCanvas = this.navigateToCanvas.bind(this);
        this.toggleCanvas = this.toggleCanvas.bind(this);
        this.loadAssignment = this.loadAssignment.bind(this);
        this.toggleAssignment = this.toggleAssignment.bind(this);
        this.state = {
            assignments: [],
            user: props.name,
            grade: props.grade,
            isCanvas: false,
            assignmentId: -1
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/student/' + this.state.user + '/getAssignments')
            .then(r => r.json())
            .then((data) => {
                this.setState({assignments: data})
            })
    }

    loadAssignment(e) {
        this.setState({assignmentId : e.currentTarget.value})
        this.toggleCanvas();
    }
    toggleAssignment(){
        this.setState({assignmentId : -1});
        this.toggleCanvas();
    }

    navigateToCanvas() {
        if (this.state.assignmentId > 0){
            if (this.state.grade === "1-5") {
                return (<LowerGrade isAssignmentPresent={true} assignmentId={this.state.assignmentId} toggleCanvas={this.toggleAssignment}></LowerGrade>);
            } else if (this.state.grade === "6-8") {
                return (<IntermediateGrade></IntermediateGrade>);
            } else {
                return (<AdvancedGrade></AdvancedGrade>);
            }
        }else {
            if (this.state.grade === "1-5") {
                return (<LowerGrade isAssignmentPresent={false} toggleCanvas={this.toggleAssignment}></LowerGrade>);
            } else if (this.state.grade === "6-8") {
                return (<IntermediateGrade></IntermediateGrade>);
            } else {
                return (<AdvancedGrade></AdvancedGrade>);
            }
        }
    }

    render() {
        if (!this.state.isCanvas) {
            return (
                <div class="Assignment_list">
                    <div style={{display: 'inline-block', width: '100%'}}>
                        <h3 align="left" style={{marginLeft: '20px', float: 'left'}}> Assignments: </h3>
                        <Button style={{margin: '20px', width: '248px', float: 'right'}} variant="contained"
                                color="primary" onClick={this.toggleCanvas}>Go to canvas</Button>
                    </div>
                    <MuiThemeProvider>
                        <div style={tableStyle}>
                            <Table>
                                <TableHeader displaySelectAll={false} adjustForCheckbox={false} editable="false">
                                    <TableRow>
                                        <TableHeaderColumn align="center">Assignment Title</TableHeaderColumn>
                                        <TableHeaderColumn align="center">Due Date</TableHeaderColumn>
                                        <TableHeaderColumn align="center">Status</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}>
                                    {this.state.assignments.map(data => (
                                        <TableRow key={data.id} >
                                            <TableRowColumn align="center">{data.title}</TableRowColumn>
                                            <TableRowColumn align="center">{data.dueDate}</TableRowColumn>
                                            <TableRowColumn align="center" >
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
        } else {
            return (this.navigateToCanvas());
        }
    }

    toggleCanvas() {
        this.setState({isCanvas: !this.state.isCanvas})
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
