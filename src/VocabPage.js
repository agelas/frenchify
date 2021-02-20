import React, {useLayoutEffect} from 'react';
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

import vocab from './jsons/vocab.json';

import Image from './backgrounds/paris_skyline2.png';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        flexGrow: 1,
        justify: 'center',
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
        justifyContent: 'center',
        padding: '5px'
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
    var obj_keys = Object.keys(vocab);
    var ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    return vocab[ran_key];
}

//Approach for shuffling array using the Fisher-Yates algorithm. Technically we introduce bias
//towards certain permutations since we're using Javascript's Math.random() function, which can 
//only utilize 2^32 bits of random state, so this isn't really Fisher-Yates since all permutations
//should be equally likely. However, there's only 4 inputs into the array, so this really isn't a 
//problem. Briefly, the algorithm proceeds as follows:
// 1. Write down the numbers from 1 through N
// 2. Pick a random number k between one and the number of unstruck numbers remaining (inclusive)
// 3. Counting from the low end, strike out the Kth number not yet struck out, and write it down at the end of a seperate list
// 4. Repeat step 2 until all the numbers have been struck out
// 5. The sequence of numbers written down in step 3 is now a random permutation of the original numbers
//Source: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
const shuffleFisherYates = (array) => {
    let i = array.length;
    while(i--) {
        const ri = Math.floor(Math.random() * (i + 1));
        [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
}

function ControlledOpenSelect() {

    const classes = useStyles();
    const [displayFrench, setDisplayFrench] = React.useState('');
    const [pick, setPick] = React.useState('');
    const [correct, setCorrect] = React.useState('');
    const [correctPick, correctFlag] = React.useState(false);
    const [Option1, setOption1] = React.useState('');
    const [Option2, setOption2] = React.useState('');
    const [Option3, setOption3] = React.useState('');
    const [Option4, setOption4] = React.useState('');
    const [open, setOpen] = React.useState(false);


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
        //useLayoutEffect is identical to useEffect except that it fires synchronously after all
        //DOM mutations which I think is what I need.

        //Grab the vocab word JSON object
       let source = pickRandomVocab();

       //Grab the field which holds the word in French
       let wordSource = source.French;

       //Reset the correctPick flag on rerender so we can actually alternate through
       //more than one word
       correctFlag(false);

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
       let showW3 = wrong3.toString().replaceAll("\"", ""); //There has got to be a better way to do this

       let optionArray = shuffleFisherYates([showCorrect, showW1, showW2, showW3]);

       //Use setter methods
       setDisplayFrench(showWord);
       setCorrect(showCorrect);
       setOption1(optionArray[0]);
       setOption2(optionArray[1]);
       setOption3(optionArray[2]);
       setOption4(optionArray[3])

       //Need to put in a way to randomize where options are displayed
       
    }, [correctPick] //The second argument to useEffect controls rerender
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
                    <MenuItem value={Option1}>{Option1}</MenuItem>
                    <MenuItem value={Option2}>{Option2}</MenuItem>
                    <MenuItem value={Option3}>{Option3}</MenuItem>
                    <MenuItem value={Option4}>{Option4}</MenuItem>
                </Select>
            </FormControl>
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

function VocabPage() {

    const classes = useStyles();

    return(

        <Grid container component = "main" className = {classes.root}>
            <CssBaseline/>
            <Grid className = {classes.centerPane}>
                <ControlledOpenSelect/>
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
}export default VocabPage