import React, {useLayoutEffect, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import nouns from './jsons/nouns.json';

import Image from './backgrounds/cafe_vence.png';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        flexGrow: 1,
        justify: 'center',
        align: 'center',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition:'center center'
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
        left: '40%',
        top: '25%',
        flexDirection: 'column',
    },
    mainDiv: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#D3D3D399',
        padding: '5px',
        align: 'center',
        justify: 'center'
    },
    regDiv: {
        display: 'flex',
        flexDirection: 'row',
        align: 'center',
        justify: 'center',
        padding: '20px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    button: {
        margin: theme.spacing(1),
    }
}));

const pickRandomVocab = () => {
    var obj_keys = Object.keys(nouns);
    var ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    return [nouns[ran_key]["noun"], nouns[ran_key]["article"]];
}

const happyPath = (argument) => {
    //console.log(argument.length)
    //console.dir(argument)
    var ran_key = Math.floor(Math.random() * argument.length);
    //console.log(ran_key)
    //console.log(argument["0"]["data"].noun)
    return [argument[ran_key.toString()]["data"].noun, argument[ran_key.toString()]["data"].article];
}

function ControlledOpenSelect(props) {

    const classes = useStyles();
    //const [faunaData, setData] = React.useState()
    const [displayFrench, setDisplayFrench] = React.useState('');
    const [pick, setPick] = React.useState('');
    const [correct, setCorrect] = React.useState('');
    const [correctPick, correctFlag] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    //const faunaData = useRef(props.faunaResponse)


    //For filling in user-selection
    const handlePick = (event) => {
        console.log('pick detected');
        console.log({pick})
        setPick(event.target.value);
    };

    const checkSubmission = () => {
        if(pick === correct) {
            console.log('right detected');
            correctFlag(true);
            setPick('');
        } else {
            setPick('');
        }
    }

    const handleClose = () => {
        console.log('close');
        setOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };

    useLayoutEffect(() => {
        let source
        //faunaData is an array???
        //console.log(faunaData["0"]["data"].noun)
        try{
            source = happyPath(props.faunaData)
        } catch(err) {
            console.log("Problemo")
            source = pickRandomVocab();
        }

        //Grab the field which holds the word in French
        let wordSource = source[0];

       //Reset the correctPick flag on rerender so we can actually alternate through
       //more than one word
       correctFlag(false);

       //Grab all the fields for the correct and incorrect translations
       let correct = source[1];
       //let wrong1 = source.Wrong1;

       //Get rid of quotation marks
       let showWord = wordSource.toString().replaceAll("\"", "");

       //Use setter methods
       setDisplayFrench(showWord);
       setCorrect(correct);
       
    }, [correctPick] //The second argument to useEffect controls rerender
    );


    return (
        <div className={classes.mainDiv}>
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
                    <MenuItem value={"un"}>un</MenuItem>
                    <MenuItem value={"une"}>une</MenuItem>
                </Select>
            </FormControl>
            <div className = {classes.regDiv}>
            <Typography variant = "h6" style={{ fontWeight: 600}}>
                {displayFrench}
            </Typography>
            </div>
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
    );
}

function GenderNounsPage() {

    const classes = useStyles();
    const [faunaResponse, setData] = React.useState()

    /*const fetchData = useCallback(async () => {
        const response = await fetch('/api/nretrieval')
        const data = await response.json() 
        setData(data)
    }, [])*/

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('/api/nretrieval')
            const data = await response.json() 
            setData(data)
        }
        fetchData()

        console.log(faunaResponse)
    }, [])

    return(

        <Grid container component = "main" className = {classes.root}>
            <CssBaseline/>
            <Grid className = {classes.centerPane}>
                <ControlledOpenSelect faunaData = {faunaResponse}/>
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
}export default GenderNounsPage