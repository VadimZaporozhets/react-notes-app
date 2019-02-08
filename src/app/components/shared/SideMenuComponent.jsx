import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import NotesIcon from '@material-ui/icons/EventNote';
import DoneIcon from '@material-ui/icons/DoneAll';
import ArchiveIcon from '@material-ui/icons/Archive';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";

const styles = theme => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    link: {
        textDecoration: 'none'
    }
});

const SideMenu = ({classes}) => {
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
            <List>
                <Link className={classes.link} to="/">
                    <ListItem button>
                        <ListItemIcon>
                            <NotesIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Notes'} />
                    </ListItem>
                </Link>
                <Link className={classes.link} to="/done-notes">
                    <ListItem button>
                        <ListItemIcon>
                            <DoneIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Done Notes'} />
                    </ListItem>
                </Link>
                <Link className={classes.link} to="/archive">
                    <ListItem button>
                        <ListItemIcon>
                            <ArchiveIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Archive'} />
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    );
};

export default withStyles(styles)(SideMenu);