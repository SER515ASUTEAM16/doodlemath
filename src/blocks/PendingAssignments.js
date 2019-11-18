import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


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
                <ListItem button>
                    <ListItemText primary="Assignment 1" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Assignment 2" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Assignment 3" />
                </ListItem>
                <ListItemLink>
                    <ListItemText primary="Assignment 4" />
                </ListItemLink>
            </List>
        </div>
    );
}