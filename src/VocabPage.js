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
    const [option1, setOption] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handlePick = (event) => {
        setPick(event.target.value);
    };

    const handleOption = (event) => {
        setOption(event.taget.value);
    }

    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
       let source = pickRandomVocab();
       let wordSource = source.French;
       wordSource = wordSource.toString().replaceAll("\"", "");
       setDisplayFrench(wordSource);
       console.log(wordSource);
       console.log("what");
    }, [displayFrench]
    );

    return (
        <div className={classes.mainDiv}>
            {displayFrench}
            <Typography>
                <VocabWord displayWord={{displayFrench}}/>
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
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

//On second thought there's absolutely no reason this has to be it's own component right?
//Or we can call pickRandomWord() in ControlledOpenSelect maybe and pass word here?
//Yeah we have hooks we can fill in with the word
class VocabWord extends Component {
    constructor(props) {
        super(props);
        this.state={
            displayWord: "",
            backupWord: "oops"
        };
    }
    
    componentDidMount(props) {
        this.setState({displayWord: props})
    }

    render() {
        return (
            <div>
                <h2>{this.state.backupWord} = </h2>
                <h2>{this.state.displayWord} = </h2>
            </div>
        )
    }
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