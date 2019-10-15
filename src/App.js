import React from 'react';
import logo from './logo.svg';
import './App.css';
import { fade, withStyles, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles'
import { Button, TextField, Grid, Paper, Typography } from '@material-ui/core';
import Sorter from './Sorter';



const useStyles = makeStyles({
  root: {
    background: '#292a2f',
    color: 'white',
  },
  input: {
    color: 'lime'
  },
  paper: {
    background: '#292a2f',
    width: 300
  },
  input: {
    color: 'lime',
    '& .MuiInput':{
      color: 'darkgreen'
    }
  },
  textField:{
    width: 250,
    '& label.Mui-focused': {
      color: 'lime',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'lime',
    },
    '& .MuiInput-underline:hover:before':{
      borderBottomColor: 'darkgreen'
    },
    '& .MuiInput-input:hover':{
      color: 'darkgreen'
    },
    '& .MuiInput-input:focus':{
      color: 'lime'
    },
    '& .Mui-focused':{
      borderColor: 'darkgreen'
    }
  },
  button: {
    width: 200,
    
  }
})


function App() {
  const [values, setValues] = React.useState({
    pages: 24
  })

  const classes = useStyles()
  const handleChange = pages => event => {
    setValues({ ...values, [pages]: event.target.value });
  };

  const sorter = new Sorter();

  function output(msg) {
    let interval = msg.toString()
    document.getElementById('txt_field-saida').value = interval
  }
  function handleClickBooklet(e) {
    // doSort(values.pages)
    output(sorter.sortBooklet(values.pages))
  }
  function handleClickDuplicado(e) {
    output(sorter.sortTwoPerPage(values.pages))
  }
  function handleClickBookletDuplo(e) {
    output(sorter.sortDoubleBooklet(values.pages))
  }

  return (
    <div className="App">
      <header className="App-header">
        <Paper className={classes.paper}>
          <Grid container
            spacing={2}
            padding={2}
            margin="normal"
            justify="center"
          >
            <Grid item
              xs={12}>
              <Typography
                variant="h5"
                component="h3"
                color="primary"
              >
                Livretto Maestro
              </Typography>
            </Grid>
            <Grid item
              xs={12}>
              <TextField
                label="paginas"
                value={values.pages}
                onChange={handleChange('pages')}
                className={ classes.textField }
              ></TextField>
            </Grid>
            <Grid item
              xs={12}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickBooklet}
                className={classes.button}
              >
                Booklet
          </Button>
            </Grid>
            <Grid item
              xs={12}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickDuplicado}
                className={classes.button}
              >
                Duplicado
          </Button>
            </Grid>
            <Grid item
              xs={12}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickBookletDuplo}
                className={classes.button}
              >
                Booklet Duplo
          </Button>
            </Grid>
            <Grid item
              xs={12}>
              <TextField
                id="txt_field-saida"
                label="Saida"
                multiline
                rows="6"
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.textField}
                helperText="copie e cole o intervalo de paginas acima na ordem em que está"
              >
              </TextField>
            </Grid>
          </Grid>
        </Paper>
      </header>
    </div>
  );
}

export default App;
