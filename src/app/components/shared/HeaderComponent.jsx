import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const styles = theme => ({
    appBar: {
        flexGrow: 1,
        zIndex: theme.zIndex.drawer + 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    link: {
        textDecoration: 'none'
    }
});

const Header = ({classes}) => {
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    React News
                </Typography>
                <Link className={classes.link} to="/create-note">
                    <Button  variant="contained" color="secondary">
                        Create Note +
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
)};

export default withStyles(styles)(Header);