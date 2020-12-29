import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(20, 60),
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(3)}px auto`,
        padding: theme.spacing(5),
        justify: 'center',
        align: 'center',
        display: 'flex',
        flexDirection: 'column'
    }

}));

function About() {

    const classes = useStyles();

    const generalAbout = `This website was built with the intention of giving people the ability to practice their basic French. Especially for
    those beginning their journey in French, the practice with vocabulary and articles should prove most helpful. The current available options
    for practice include vocabulary (nouns & adjectives), gender of nouns (un vs une), articles (definite vs indefinite vs partitive), and 
    conjugations in the present tense.`
    return(
        <div className = {classes.root}>
            <Paper classname = {classes.paper}>
                <Grid container spacing = {2}>
                    <Grid item xs zeroMinWidth>
                        <Typography align = 'left' variant = 'h4'>About</Typography>
                        <Typography align = 'center'>{generalAbout}</Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper classname = {classes.paper}>
                <Grid container spacing = {2}>
                    <Grid item xs zeroMidWidth align = "center">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<HomeIcon/>}
                            onClick = {(e) =>{
                                e.preventDefault();
                                window.location.href="/"
                            }}
                        >
                            Home
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )

} export default About