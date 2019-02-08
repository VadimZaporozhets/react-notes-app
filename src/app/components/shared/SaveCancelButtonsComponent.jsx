import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    button: {
        marginRight: theme.spacing.unit,
    },
    container: {
        textAlign: 'left',
        marginTop: theme.spacing.unit * 3
    }
});

const SaveCancelComponent = ({classes, onSave, onCancel}) => {
    return (
        <Grid item xs={12} className={classes.container}>
            <Button onClick={onCancel} variant="outlined" color="secondary" className={classes.button}>
                Cancel
            </Button>
            <Button onClick={onSave} variant="outlined" color="primary" className={classes.button}>
                Save
            </Button>
        </Grid>

    );
};

export default withStyles(styles)(SaveCancelComponent);