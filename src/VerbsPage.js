import React from 'react';
import {useAsyncEffect} from 'use-async-effect';
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
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Image from './backgrounds/Strasbourg.png';

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
        left: '40%',
        top: '15%',
        flexDirection: 'column',
        width: '25vw',
    },
    form: {
        margin: theme.spacing(2),
    },
    divider: {
        display: 'flex',
        direction: 'row'
    },
    spacer: {
        margin: 8
    },
    button: {
        margin: theme.spacing(1),
    },
    infoButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        height: '2vw',
        width: '1vw'
    }
}));

function ComposedTextField() {

    const classes = useStyles();
    
    const [displayVerb, setDisplayVerb] = React.useState('');
    const [displayPronoun, setDisplayPronoun] = React.useState('');
    const [tense, setTense] = React.useState('');
    const [correctConjugation, setCorrectConjugation] = React.useState('');
    const [userAnswer, setUserAnswer] = React.useState('');
    const [errorMode, setErrorMode] = React.useState(false);
    const [correctFlag, setCorrectFlag] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const pickRandomVerb = (list) => {
        var obj_keys = Object.keys(list);
        var ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
        return list[ran_key];
    }

    const handleChange = (event) => {
        setUserAnswer(event.target.value);
    }

    const checkSubmission = () => {
        if (userAnswer === correctConjugation) {
            setCorrectFlag(true);
        } else {
            setErrorMode(true);
        }
    }

    const loadData = async() => {
        const response = await fetch('verbs.json');
        const json = await response.json();
        return json;
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    useAsyncEffect(async () => {
        
        const data = await loadData();
        console.log(data);

        let source = pickRandomVerb(data)
        console.log(source)

        let verbSource = source.infinitive;
        let correctSource = source.conjugation;
        let pronounSource = source.pronoun;
        let tenseSource = source.tense;

        let showVerb = verbSource.toString().replaceAll("\"", "");
        let correctConjugation = correctSource.toString().replaceAll("\"", "");
        let showPronoun = pronounSource.toString().replaceAll("\"", "");
        let showTense = tenseSource.toString().replaceAll("\"", "");

        setDisplayVerb(showVerb);
        setDisplayPronoun(showPronoun);
        setCorrectConjugation(correctConjugation);
        setTense(showTense);
        setCorrectFlag(false);
        setErrorMode(false);
        setUserAnswer('');
    
    }, [correctFlag])


    return(
        <div>
        <div align='center' align-items='center'>
            <Typography className = {classes.form}>
                <h2>{displayVerb}</h2>
            </Typography>
        </div>
        <div className = {classes.divider}>
            <Typography className = {classes.spacer}>
                <h2>{displayPronoun}</h2>
            </Typography>
            <form className = {classes.spacer} noValidate autoComplete="off">
                <FormControl error = {errorMode} variant = "outlined" margin="normal">
                    <InputLabel htmlFor = "component-outlined">{tense}</InputLabel>
                    <OutlinedInput id = "component-outlined" value = {userAnswer} onChange = {handleChange} label="Conjugation"/>
                    <FormHelperText id = "component-helper-text"></FormHelperText>
                </FormControl>
            </form>
            <Button
                variant="contained"
                color="primary"
                alignItems= 'center'
                justifyContent= 'center'
                className={classes.infoButton}
                startIcon={<InfoIcon/>}
                size='small'
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
                        Enter the conjugation of the verb shown into the input field. For compound tenses such as the passé composé
                        or plus-que-parfait, you must include the auxiliary verb. If you need accented letters, feel free to copy-and-paste
                        from the following: à é è ê î ô
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
        </div>
    )
}

function VerbsPage() {
    
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
} export default VerbsPage