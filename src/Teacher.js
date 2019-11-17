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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
                        <Paper>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">ID</TableCell>
                                        <TableCell align="center">Name</TableCell>
                                        <TableCell align="center">Email</TableCell>
                                        <TableCell align="center">Grade</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.students.map(data => (
                                        <TableRow>
                                            <TableCell component="th" align="center" scope="data">{data.id}</TableCell>
                                            <TableCell align="center">{data.name}</TableCell>
                                            <TableCell align="center">{data.email}</TableCell>
                                            <TableCell align="center">{data.grade}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </div>
            </MuiThemeProvider>
        )
    }
}


const tableStyle = {
    padding:'10px',
    margin:'10px',
    border: '2px solid black'
};

export default Teacher;
