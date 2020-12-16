import React, {Component, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

import vocab from './vocab.json';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        flexGrow: 1,
        justify: 'center'
    },
    image: {
        height: '100vh',
        width: '100vh',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', //this should force it to resize the background image to cover entire container
        backgroundPosition:'center center'
    },
    centerPane: {
        display: 'flex',
        align: 'center',
        justify: 'center',
        backgroundColor: '#D3D3D399',
        position: 'absolute',
        left: '50%',
        top: '30%',
    },
    mainDiv: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#D3D3D399',
        justifyContent: 'center',
        padding: '5px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));

const pickRandomVocab = () => {
    var obj_keys = Object.keys(vocab);
    var ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    return vocab[ran_key];
}

function ControlledOpenSelect() {

    const classes = useStyles();
    const [displayFrench, setDisplayFrench] = React.useState('');
    const [pick, setPick] = React.useState('');
    const [correct, setCorrect] = React.useState('');
    const [wrongOption1, setWrongOption1] = React.useState('');
    const [wrongOption2, setWrongOption2] = React.useState('');
    const [wrongOption3, setWrongOption3] = React.useState('');
    const [open, setOpen] = React.useState(false);

    //For filling in user-selection
    const handlePick = (event) => {
        setPick(event.target.value);
    };

    const handleOption = (event) => {
        setWrongOption1(event.taget.value);
    }

    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        //Grab the vocab word JSON object
       let source = pickRandomVocab();

       //Grab the field which holds the word in French
       let wordSource = source.French;

       //Grab all the fields for the correct and incorrect translations
       let correct = source.English;
       let wrong1 = source.Wrong1;
       let wrong2 = source.Wrong2;
       let wrong3 = source.Wrong3;

       //Get rid of quotation marks
       let showWord = wordSource.toString().replaceAll("\"", "");
       let showCorrect = correct.toString().replaceAll("\"", "");
       let showW1 = wrong1.toString().replaceAll("\"", ""); 
       let showW2 = wrong2.toString().replaceAll("\"", "");
       let showW3 = wrong3.toString().replaceAll("\"", "");

       //Use setter methods
       setDisplayFrench(showWord);
       setCorrect(showCorrect);
       setWrongOption1(showW1);
       setWrongOption2(showW2);
       setWrongOption3(showW3);

       //Need to put in a way to randomize where options are displayed
       
    }, [displayFrench, correct, wrongOption1, wrongOption2, wrongOption3]
    );

    return (
        <div className={classes.mainDiv}>
            <Typography>
                <h2>{displayFrench} = </h2>
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel id="control-open-select">English</InputLabel>
                <Select 
                    labelId="control-open-select"
                    id="control-open"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={pick}
                    onChange={handlePick}
                >
                    <MenuItem value={0}>{correct}</MenuItem>
                    <MenuItem value={10}>{wrongOption1}</MenuItem>
                    <MenuItem value={20}>{wrongOption2}</MenuItem>
                    <MenuItem value={30}>{wrongOption3}</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

function VocabPage() {

    const classes = useStyles();

    return(

        <Grid container component = "main" className = {classes.root}>
            <CssBaseline/>
            <Grid className = {classes.centerPane}>
                <ControlledOpenSelect/>
            </Grid>
        </Grid>

    );
}export default VocabPage