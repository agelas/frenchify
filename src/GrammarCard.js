import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200, //change
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function GrammarCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         {props.explanation}
        </Typography>
        <Typography variant="body2" component="p">
          {props.example1}
          <br />
          {props.example2}
        </Typography>
      </CardContent>
    </Card>
  );
}
