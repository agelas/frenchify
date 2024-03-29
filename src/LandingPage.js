import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import VocabPage from './VocabPage';
import GenderNounsPage from './GenderNounsPage';
import ArticlesPage from './ArticlesPage';
import Verbs from './VerbsPage';
import About from './About';
import Grammar from './Grammar';
import FaunaTester from './FaunaTester';

import Image from './backgrounds/PissaroTransfer1.png'; //relative path import, maybe fix idk

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        flexGrow: 1,  
    },
    image: {
        height: '100vh',
        width: '100vh',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', //this should force it to resize the background image to cover entire container
        backgroundPosition:'center center'
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '25%',
        backgroundColor: '#D3D3D399'
        
    },
    menuPaper: {
        marginRight: theme.spacing(4),
    }
}));

function LandingPage() {

    const classes = useStyles(); 

    return(
        <Grid container component = "main" className = {classes.root}>
            <CssBaseline/>
            <Router>
            <Switch>
            <Route exact path = "/">
            <Grid item md={12} lg={12} className = {classes.image}>
                <Grid className = {classes.paper}>
                    <Typography component="h1" variant='h1'>
                        Frenchify
                    </Typography>
                </Grid>
                <Paper className={classes.menuPaper} >
                <MenuList className={classes.menu} >
                    <MenuItem style={{fontSize: '20px'}}>Home</MenuItem>
                    <MenuItem style={{fontSize: '20px'}} onClick={(e) => {e.preventDefault();window.location.href="/Vocab"}}>Vocab</MenuItem>
                    <MenuItem style={{fontSize: '20px'}} onClick={(e) => {e.preventDefault();window.location.href="/GenderNouns"}}>Gender of Nouns</MenuItem>
                    <MenuItem style={{fontSize: '20px'}} onClick={(e) => {e.preventDefault();window.location.href="/Articles"}}>Articles</MenuItem>
                    <MenuItem style={{fontSize: '20px'}} onClick={(e) => {e.preventDefault();window.location.href="/Verbs"}}>Verbs</MenuItem>
                    <MenuItem style={{fontSize: '20px'}} onClick={(e) => {e.preventDefault();window.location.href="/Grammar"}}>Grammar</MenuItem>
                    <MenuItem style={{fontSize: '20px'}} onClick={(e) => {e.preventDefault();window.location.href="/About"}}>About</MenuItem>
                </MenuList>
                </Paper>
            </Grid>
            </Route>
            <Route path="/Vocab" exact component={VocabPage}/>
            <Route path="/GenderNouns" exact component={GenderNounsPage}/>
            <Route path="/Articles" exact component={ArticlesPage}/>
            <Route path="/Verbs" exact component={Verbs}/>
            <Route path="/Grammar" exact component={Grammar}/>
            <Route path="/About" exact component={About}/>
            <Route path="/Test" exact component={FaunaTester}/>
            </Switch>
            </Router>
        </Grid>
    );
} export default LandingPage