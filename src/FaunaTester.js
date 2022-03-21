import React, {useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        direction: 'flex',
        flexGrow: 1,
        justify: 'center',
        align: 'center',
        backgroundColor: '#eeeeee'
    },
    buttons: {
        direction: 'flex',
        justify: 'center',
        align: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function FaunaTester() {

    const [faunaResponse, setData] = React.useState()
    const classes = useStyles();

    const fetchData = async () => {
        const response = await fetch('/api/nretrieval/nretrieval', {
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Credentials" : true ,
                "Accept": "/",
                "Content-Type": "application/json",
            },
            method: 'GET'
        })
        const data = await response.json() 
        console.log(data)
        setData(JSON.stringify(data))
    }

    const clearData = () => {
        setData(null)
    }

    useEffect(() => {

    }, [])

    return(
        <Container className={classes.root}>
            <div className={classes.buttons}>
                <Button variant="contained" color="primary" onClick={fetchData}>Gender Nouns</Button>
                <Button variant="contained" color="secondary" onClick={clearData}>Clear</Button>
            </div>
            <Typography>
                {faunaResponse}
            </Typography>

        </Container>
    )

}