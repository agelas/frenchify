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