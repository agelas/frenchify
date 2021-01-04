import React, { useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';

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
    const [data, setData] = React.useState([]);
    const [displayVerb, setDisplayVerb] = React.useState('');

    const pickRandomVerb = (list) => {
        var obj_keys = Object.keys(list);
        var ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
        return list[ran_key];
    }

    const loadData = async() => {
        const response = await fetch('verbs.json');
        const json = await response.json();
        setData(json);
        console.log(json); //json is exactly what I want here
        console.log(data); //data is just '[]' here
    }

    useEffect(() => {

        loadData();
        console.log(data)

        let source = pickRandomVerb(data)
        console.log(source)

        let verbSource = source.infinitive;

        let showVerb = verbSource.toString().replaceAll("\"", "");

        setDisplayVerb(showVerb)
    
    }, [])


    return(
        <div>
            <Typography className = {classes.form}>
                <p>proxy {displayVerb}</p>
            </Typography>
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