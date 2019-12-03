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
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Teacher_assignments from "./Teacher_assignments";


class ViewAssign extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);

        this.state = {
            title: '',
            response: [],
            backFlag: false
        };
    }

    componentDidMount() {                               //Fetching the student assignemnt API
        fetch('http://localhost:8080/teacher/studentassignment/' + this.props.id)
            .then(r => r.json())
            .then((data) => {
                if (data.length === 0) {
                    alert("No Submissions found!");
                    this.goBack();
                } else {
                    let tmp = []
                    for (let i = 0; i < data.length; i++) {
                        tmp.push(data[i])
                    }
                    this.setState({
                        response: tmp
                    })
                }

            })
    }


    render() {
        if (!this.state.backFlag) {
            return (
                <div className="viewAssign">
                    <MuiThemeProvider>                  {/*Back button*/}
                        <RaisedButton style={{margin: 10}} primary={true} onClick={this.goBack}>Back</RaisedButton>
                        <Table>                                 {/*Display score*/}
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false} editable="false">
                                <TableRow>
                                    <TableHeaderColumn align="center">Student Name</TableHeaderColumn>
                                    <TableHeaderColumn align="center">Score</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {this.state.response.map((data) => (
                                    <TableRow key={data.id}>
                                        <TableRowColumn align="center">{data.name}</TableRowColumn>
                                        <TableRowColumn align="center">{data.score}</TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </MuiThemeProvider>
                </div>
            )
        }
        else{
            return (<Teacher_assignments grade={this.props.grade} name={this.props.name}/>)
        }
    }


    goBack(e) {
        this.setState({
            backFlag: true
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

export default ViewAssign;
