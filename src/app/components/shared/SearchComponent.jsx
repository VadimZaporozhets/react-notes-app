import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        height: 50,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        width: '100%'
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
        height: '100%'
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%'
    }
});

const Search = ({classes, onSearchChange, searchValue}) => {
    return (
        <Grid xs={12} item>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search"
                    onChange={onSearchChange}
                    value={searchValue}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                />
            </div>
        </Grid>
    );
};

export default withStyles(styles)(Search);