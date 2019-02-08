import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import ArchiveIcon from '@material-ui/icons/Archive';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const styles = theme => ({
    card: {
        maxWidth: 320,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    text: {
        textAlign: 'left'
    },
    link: {
        textDecoration: 'none'
    }
});

const CardComponent = ({ classes, title, text, primaryBtnAction, primaryBtnText, secondaryBtnAction, secondaryBtnText, isEditable, noteId }) => {
    return (
        <Grid item>
            <Card className={classes.card}>
                {isEditable ?
                    <Link className={classes.link} to={`/note/${noteId}`}>
                        <CardActionArea>
                            <CardContent>
                                <Typography className={classes.text} gutterBottom variant="h5" component="h2">
                                    {title}
                                </Typography>
                                <Typography className={classes.text} component="p">
                                    {text}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                    :
                    <CardActionArea>
                        <CardContent>
                            <Typography className={classes.text} gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography className={classes.text} component="p">
                                {text}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                }
                <CardActions>
                    {primaryBtnAction && <Button onClick={() => {primaryBtnAction(noteId)}} variant="contained" size="small" color="primary">
                        <DoneIcon className={classes.leftIcon}/>
                        {primaryBtnText}
                    </Button>}
                    {secondaryBtnAction && <Button onClick={() => {secondaryBtnAction(noteId)}} variant="contained" size="small" color="secondary">
                        <ArchiveIcon className={classes.leftIcon}/>
                        {secondaryBtnText}
                    </Button>}

                </CardActions>
            </Card>
        </Grid>
    );
};

export default withStyles(styles)(CardComponent);
