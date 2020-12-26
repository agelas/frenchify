import React, { useEffect, useLayoutEffect } from 'react';
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
    },
    form: {
        margin: theme.spacing(1)
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
    const [sentenceDisplay, setSentenceDisplay] = React.useStateO('');
    const [correctArticle, setCorrectArticle] = React.useState('');
    const [userAnswer, setUserAnswer] = React.useState('');
    const [errorMode, setErrorMode] = React.useStaet(false);
    const [correctFlag, setCorrectFlag] = React.useState(false);

    const handleChange = (event) => {
        setUserAnswer(event.target.value);
    };

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

    }, [correctFlag]
    );

    return(
        <div>
            <form className = {classes.form} noValidate autoComplete="off">
                <FormControl error = {false} variant = "outlined">
                    <InputLabel htmlFor = "component-outlined">Article</InputLabel>
                    <OutlinedInput id = "component-outlined" value = {userAnswer} onChange = {handleChange}/>
                    <FormHelperText id = "component-helper-text">Something later</FormHelperText>
                </FormControl>
            </form>
        </div>
    )

}