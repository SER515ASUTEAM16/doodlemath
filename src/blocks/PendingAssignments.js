import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Advanced1 from "./Advanced1";
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: '94%',
        backgroundColor: theme.palette.background.paper,
        spacing: 8,
        paddingLeft: '3%',
        paddingRight: '3%',
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <Router>
                    <Route path="/Advanced1" component={Advanced1}/>
                    <Link to="/Advanced1">
                        <ListItem button>
                            <ListItemText primary="Assignment 1" />
                        </ListItem>
                    </Link>
                </Router>
                    <ListItem button>
                        <ListItemText primary="Assignment 2" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary = "Assignment 3" />
                    </ListItem>
                    <ListItemLink href = "https://www.google.com/">
                        <ListItemText primary="Assignment 4" />
                    </ListItemLink>
                </List>
        </div>
    );
}