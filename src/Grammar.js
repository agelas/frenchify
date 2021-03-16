import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import Image from './backgrounds/SaintMichelBackground.png';
import GrammarCard from './GrammarCard.js';

const RecentPastTitle = "Recent Past w/Present Tense";
const RecentPastExplanation = "To express the recent past using the present tense, one can use the construction \"venir de + infinitive\".";
const RecentPastExamples1 = "Je viens de faire la vaisselle. || I just did the dishes.";
const RecentPastExamples2 = "Michel vient d'arriver. || Michel has just arrived.";

const FutureProcheTitle = "Near Future w/Present Tense";
const FutureProcheExplanation = "The future proche is constructed by using the present-tense aller conjugation + infinitive.";
const FutureProcheExample1 = "Marie va faire les courses ce soir. || Maire is going to do the grocery shopping tonight."
const FutureProcheExample2 = "Ils vont passer un examen demain. || They're going to take an exam tomorrow."

const HowLongTitle = "How long?";
const HowLongExplanation = "To ask how long/for what period of time something occured, use the expression \"depuis combien de temps\".";
const HowLongExample1 = "Tu habites à Montréal depuis combien de temps? || How long have you been living in Montreal?";
const HowLongExample2 = "Depuis combien de temps étudiez-vous l'anglais? || How long have you been studying English?";

const WhatTitle = "What";
const WhatExplanation = "\"Qu'est-ce que\" means \"what\" when asking about the object of the verb, or the thing that has the action done to it. \"Quel\" means \"what\" in the sense of which. It is asking about the specific instance/type of something, and is therefore followed by a noun.";
const WhatExample1 = "Qu'est-ce que tu manges? || What are you eating?";
const WhatExample2 = "Quel journal lisez-vous? || What/which newspapaer are you reading?"

const MannerAdverbTitle = "Manner Adverbs";
const MannerAdverbExplanation = "Manner adverbs describe how something is done, in response to the question \"comment?\". Many adverbs end in -ment, and are based on the adjective stem. If the masculine adjective ends in a vowel, than add -ment. If the masculine adjective ends in a consonant, use the feminine form + -ment.";
const MannerAdverbExample1 = "poli || poliment";
const MannerAdverbExample2 = "distrait || distraitement";

const QuiQueTitle = "Qui and Que";
const QuiQueExplanation = "Qui and que (qu') represent the antecedent when a subject or direct object is needed for the verb in a relative clause. Qui represents the subject, que (qu') represents the direct object.";
const QuiQueExample1 = "C'est un personnage qui distribue des cadeaux || He's a person who leaves gifts.";
const QuiQueExample2 = "Voici un cadeau qu'on donne rarement || Here's a gift that people rarely give.";

const OuTitle = "Où";
const OuExplanation = "Où is used to give information about the place or time something occurs in relation to the antecedent.";
const OuExample1 = "Nous cherons une église où il y a sun service. || We are looking for a church where there is service.";
const OuExample2 = "Décembre est un mais où il y a beaucoup de fêtes || December is a month when there are lots of holidays.";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        spacing: 10,
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', //this should force it to resize the background image to cover entire container
        backgroundPosition:'center center',
        display: 'flex',
        justify: 'center',
        align: 'center',
        flexDirection: 'column',
        padding: '50px'
    },
    button: {
        margin: theme.spacing(1),
    },
    paper: {
        maxWidth: '80vh',
        maxHeight: '50vh',
        display: 'flex',
        justify: 'center',
        align: 'center',
        flexDirection: 'column'
    },
    gridList: {
        width: "80vh",
        height: "60vh",
        justify: 'center',
        align: 'center',
        display: 'flex',
    }

}));

function Grammar() {

    const classes = useStyles();

    return(
        <div className = {classes.root}>
            
            <Grid container spacing = {3} direction = "column" display = "flex" alignItems = "center" height = "80vh"> 
                {/*Ok so alignItems did the trick since vertical is the main axis*/}
                <Grid item xs={8} zeroMinWidth display = "flex" alignContent = "center" alignItems = "center" justify = "center">
                    <Typography variant = 'h5' style={{ backgroundColor: '#ffffff', height: '5vh', padding: '5px'}}>
                        Grammar
                    </Typography>
                    <Typography gutterBottom = "true" style={{ backgroundColor: '#ffffff', height: '10vh', width: '80vh', padding: '5px'}}>
                        Here you will find an assortment of various grammatical rules and constructions that I find interesting and useful. There
                        are simply too many rules, exceptions, and nuances to cover, but a good collection can be found here.
                    </Typography>
                </Grid>
                
                <GridList cellHeight = {100} cols = {1} spacing = {8} padding = '5px' className = {classes.gridList}>
                    <GrammarCard title = {RecentPastTitle} explanation = {RecentPastExplanation} example1 = {RecentPastExamples1} example2 = {RecentPastExamples2}/>
                    <Typography variant = 'h5' style={{height: '5vh'}}/>
                    <GrammarCard title = {FutureProcheTitle} explanation = {FutureProcheExplanation} example1 = {FutureProcheExample1} example2 = {FutureProcheExample2}/>
                    <Typography variant = 'h5' style={{height: '5vh'}}/>
                    <GrammarCard title = {HowLongTitle} explanation = {HowLongExplanation} example1 = {HowLongExample1} example2 = {HowLongExample2}/>
                    <Typography variant = 'h5' style={{height: '5vh'}}/>
                    <GrammarCard title = {WhatTitle} explanation = {WhatExplanation} example1 = {WhatExample1} example2 = {WhatExample2}/>
                    <Typography variant = 'h5' style={{height: '5vh'}}/>
                    <GrammarCard title = {MannerAdverbTitle} explanation = {MannerAdverbExplanation} example1 = {MannerAdverbExample1} example2 = {MannerAdverbExample2}/>
                    <Typography variant = 'h5' style={{height: '5vh'}}/>
                    <GrammarCard title = {QuiQueTitle} explanation = {QuiQueExplanation} example1 = {QuiQueExample1} example2 = {QuiQueExample2}/>
                    <Typography variant = 'h5' style={{height: '5vh'}}/>
                    <GrammarCard title = {OuTitle} explanation = {OuExplanation} example1 = {OuExample1} example2 = {OuExample2}/>
                    <Typography variant = 'h5' style={{height: '5vh'}}/>
                </GridList>

                <Grid item xs={8} zeroMidWidth display = "flex" alignContent = "center" alignItems = "center" justify = "center">
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
                </Grid>
                    
            </Grid>
            
            
        </div>
    )

} export default Grammar