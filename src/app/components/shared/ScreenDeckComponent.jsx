import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

let contentSpacing;

const styles = theme => {
    contentSpacing = theme.spacing.unit * 3;

    return {
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            padding: theme.spacing.unit * 3
        },
        title: {
            textAlign: 'left'
        }
    }
};

const ScreenDeck = ({classes, title, children}) => {
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container spacing={contentSpacing}>
                <Grid item xs={12}>
                    <Typography className={classes.title} variant="h4" component={'h2'}>{title}</Typography>
                </Grid>
                <Grid item container spacing={contentSpacing} xs={12}>
                    {children}
                </Grid>
            </Grid>
        </main>
    );
};

export default withStyles(styles)(ScreenDeck);