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
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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

function ComposedTextField() {

    const classes = useStyles();

    const getData = () => {

        fetch('verbs.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            }
        }).then(function(response){
            console.log(response)
            setData(response.json());
            return response.json();
        }).then(function(myJson){
            console.log(myJson);
        });
    }


    const [data, setData] = React.useState();
    const [verbDisplay, setVerbDisplay] = React.useState('');
    const [correctConjugation, setCorrectConjugation] = React.useState('');
    const [userAnswer, setUserAnswer] = React.useState('');
    const [errorMode, setErrorMode] = React.useState(false);
    const [correctFlag, setCorrectFlag] = React.useState(false);

    const handleChange = (event) => {
        setUserAnswer(event.target.value);
    };

    const checkSubmission = () => {

        if (userAnswer === correctConjugation) {
            setCorrectFlag(true);
        } else {
            setErrorMode(true);
        }
    };

    useEffect(() => {
        setVerbDisplay('Boire')
        setErrorMode(false);
        setCorrectFlag(true);
    }, []
    );

    return(
        <div>
            <Typography className = {classes.form}>
                <h3>proxy</h3>
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
                startIcon={<CheckCircleOutlineIcon/>}
                onClick = {checkSubmission}
            >
                Check
            </Button>
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