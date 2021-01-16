import React, { useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import sentences from './articles.json';

import Image from './backgrounds/rheine.png';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        flexGrow: 1,
        justify: 'center',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition:'center center',
    },
    centerPane: {
        display: 'flex',
        align: 'center',
        justify: 'center',
        backgroundColor: '#D3D3D399',
        position: 'absolute',
        left: '30%',
        top: '15%',
        flexDirection: 'column',
        width: '25vw',
    },
    form: {
        margin: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
    }
}));

const pickRandomSentence = () => {
    var obj_keys = Object.keys(sentences);
    var ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    return sentences[ran_key];
}

function ComposedTextField() {

    const classes = useStyles();

    //I mean basically the trick is making sure the user's value matches the 
    //article from the JSON. If not, trigger error box, show hint, and let them try again.
    //State variables are gonna be value, correctValue, errorMode I think
    const [sentenceDisplay, setSentenceDisplay] = React.useState('');
    const [correctArticle, setCorrectArticle] = React.useState('');
    const [userAnswer, setUserAnswer] = React.useState('');
    const [errorMode, setErrorMode] = React.useState(false);
    const [correctFlag, setCorrectFlag] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setUserAnswer(event.target.value);
    };

    const checkSubmission = () => {

        if (userAnswer === correctArticle) {
            setCorrectFlag(true);
        } else {
            setErrorMode(true);
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {

        //Grab our JSON that contains everything we need
        let source = pickRandomSentence();

        //Extract the sentence and correct answer 
        let sentenceSource = source.sentence;
        let correctSource = source.article;

        //Get rid of the quotation marks
        let showSentence = sentenceSource.toString().replaceAll("\"", "");
        let correctAnswer = correctSource.toString().replaceAll("\"", "");

        //Set our state variables
        setSentenceDisplay(showSentence);
        setCorrectArticle(correctAnswer);
        setCorrectFlag(false); //This one is kinda important
        setErrorMode(false); //If you don't want it stuck on red 
        setUserAnswer(''); //So that previous answer isn't stuck in OutlinedInput component

    }, [correctFlag]
    );

    return(
        <div>
            <Typography className = {classes.form}>
                <h3>{sentenceDisplay}</h3>
            </Typography>
            <form className = {classes.form} noValidate autoComplete="off">
                <FormControl error = {errorMode} variant = "outlined" margin="normal">
                    <InputLabel htmlFor = "component-outlined">Article</InputLabel>
                    <OutlinedInput id = "component-outlined" value = {userAnswer} onChange = {handleChange} label="Article"/>
                    <FormHelperText id = "component-helper-text"></FormHelperText>
                </FormControl>
            </form>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<InfoIcon/>}
                onClick = {handleClickOpen}
            >
                Info
            </Button>
            <Dialog
                open = {open}
                onClose = {handleClose}
            >
                <DialogTitle id="dialog-title">{"Information"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialog-content">
                        Enter the correct article that would fill in the blank for the sentence shown. The answer
                        will either be definite (le, las, l', les), indefinite (un, une, des), or partitive (du, de la, de l').  
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick = {handleClose} color = "primary">
                            Close
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<CheckCircleOutlineIcon/>}
                onClick = {checkSubmission}
            >
                Check
            </Button>
        </div>
    )
}

function ArticlesPage() {
    
    const classes = useStyles()

    return(
        <Grid container component = "main" className = {classes.root}>
            <CssBaseline/>
            <Grid className = {classes.centerPane}>
                <ComposedTextField/>
                <div align = 'center'>
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
                </div>
            </Grid>
        </Grid>
    );
} export default ArticlesPage