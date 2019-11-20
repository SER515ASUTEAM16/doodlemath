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
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


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
        )
    }
}


const tableStyle = {
    padding: '10px',
    margin: '10px',
    border: '2px solid black'
};

export default Teacher;
