import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import {makeStyles} from '@material-ui/core/styles';

import Image from './backgrounds/Marseille.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(20, 60),
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', //this should force it to resize the background image to cover entire container
        backgroundPosition:'center center'
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(10)}px auto`,
        padding: theme.spacing(8),
        justify: 'center',
        align: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        margin: theme.spacing(1),
    }

}));

function About() {

    const classes = useStyles();

    const generalAbout = `This website was built with the intention of giving people the ability to practice their basic French. Especially for
    those beginning their journey in French, the practice with vocabulary and articles should prove most helpful. The current available options
    for practice include vocabulary (nouns & adjectives), gender of nouns (un vs une), articles (definite vs indefinite vs partitive), and 
    conjugations in the present tense.`

    const aboutBackgrounds = `The background images were created using a machine learning technique called neural style transfer, outlined in 
    Leon Gatys et al.'s paper: A Nerual Algorithm of Artistic Style. The basic idea revolves around taking a content image and a style image,
    and producing a third image that is essentially the content image rendered in the same vein as the style image. For example, if you take 
    a picture of Marseille and a picture painted by an impressionist like Pissarro, you end up with the background image for this page. I've
    provided links to Gatys et al.'s paper, the implementation of neural style transfer I used (VGG 19), and my own version (very small changes that
    replaced TensorFlow 1.0 lingo with TensorFlow 2.0 and make it easier to upload images directly from one's computer) of the aforementioned 
    implementation, below. It's pretty fun to watch a picture you took turn into something Van Gogh or Monet might have painted, so feel free to 
    play around.`

    const errors = `If you happen to notice any errors, please follow the link below to the github repository for this website, and open a new 
    issue. If there are new words/sentences/features you want to see added, feel free to open a new issue for that as well.`

    return(
        <div className = {classes.root}>
            <Paper classname = {classes.paper}>
                <Grid container spacing = {3} padding = {3}>
                    <Box m ={3}>
                    <Grid item xs zeroMinWidth>
                        <Typography align = 'left' variant = 'h4'>About</Typography>
                        <Typography align = 'center'>{generalAbout}</Typography>
                    </Grid>
                    </Box>
                </Grid>
            </Paper>
            <Paper classname = {classes.paper}>
                <Grid container spacing = {2}>
                <Box m = {3}>
                    <Grid item xs zeroMinWidth>
                        <Typography align = 'left' variant = 'h5'>About the Backgrounds</Typography>
                        <Typography align = 'left'>{aboutBackgrounds}</Typography>
                    </Grid>
                </Box>
                </Grid>                    
            </Paper>
            <Paper classname = {classes.paper}>
                <Grid container spacing = {2}>
                    <Grid item xs zeroMidWidth align = 'center' justify = 'center'>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<LinkIcon/>}
                            onClick = {(e) =>{
                                e.preventDefault();
                                window.location.href="https://arxiv.org/abs/1508.06576"
                            }}
                        >
                            Gatys et al.
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<LinkIcon/>}
                            onClick = {(e) =>{
                                e.preventDefault();
                                window.location.href="https://colab.research.google.com/github/tensorflow/models/blob/master/research/nst_blogpost/4_Neural_Style_Transfer_with_Eager_Execution.ipynb#scrollTo=eqxUicSPUOP6"
                            }}
                        >
                            VGG 19
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<GitHubIcon/>}
                            onClick = {(e) =>{
                                e.preventDefault();
                                window.location.href="https://github.com/agelas/VGG-19-StyleTransfer"
                            }}
                        >
                            My VGG 19 
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Paper classname = {classes.paper}>
                <Grid container spacing = {2} align = 'center' justify = 'center' alignItems = 'center'>
                    <Box m = {3}>
                    <Grid item xs zeroMinWidth>
                        <Typography align = 'left' variant = 'h5'>Corrections</Typography>
                        <Typography align = 'left'>{errors}</Typography>
                    </Grid>
                    <Grid item xs zeroMidWidth>
                        <Button
                            variant="contained"
                            color="gray"
                            className={classes.button}
                            startIcon={<GitHubIcon/>}
                            onClick = {(e) =>{
                                e.preventDefault();
                                window.location.href="https://github.com/agelas/frenchify"
                            }}
                        >
                            Repository Link
                        </Button>
                    </Grid>
                    </Box>
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