import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import sentences from './articles.json';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        flexGrow: 1,
        justify: 'center',
        //backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition:'center center'
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
}