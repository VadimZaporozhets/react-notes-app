import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    }
});

const MessageAlert = ({classes ,isOpen, handleClose, message, variant}) => {
    return (
        <Snackbar
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            open={isOpen}
            onClose={handleClose}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}

        >
            <SnackbarContent id="message-id" className={classes[variant]} message={message}/>
        </Snackbar>
    );
};

export default withStyles(styles)(MessageAlert);

