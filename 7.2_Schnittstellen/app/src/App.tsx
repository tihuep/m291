import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);


function App() {
  const classes = useStyles();

  const [response, setResponse] = useState('');
  const [open, setOpen] = React.useState(false);

  const pressButton = (button: String): void => {
    if (button === "ping"){

      fetch('https://ebzuerich-simple-api.herokuapp.com/ping')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setResponse(JSON.stringify(data));
      });
    }else if (button === "errorPing"){
      fetch('https://ebzuerich-simple-api.herokuapp.com/errorping')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setResponse(JSON.stringify(data));
      });
    }else if (button === "delayedPing"){
      setOpen(!open);
      fetch('https://ebzuerich-simple-api.herokuapp.com/delayedping')
      .then(response => response.json())
      .then(data => {
        setOpen(false)
        console.log(data);
        setResponse(JSON.stringify(data));
      });
    }
  }

  return (
    <div className="App">
      <MyButton buttonPress={() => pressButton("ping")} buttonText="Ping"></MyButton>    
      <MyButton buttonPress={() => pressButton("errorPing")} buttonText="PingError"></MyButton>    
      <MyButton buttonPress={() => pressButton("delayedPing")} buttonText="PingDelayed"></MyButton>
      <p>{response}</p>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default App;
