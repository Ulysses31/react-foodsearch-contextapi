import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { GlobalContext } from '../context/globalstate';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // marginBottom: "30px"
    flexGrow: 1
  }
}));

export default function SearchForm() {
  const { getRecipes, setLoader } = useContext(
    GlobalContext
  );
  const [searchQuery, setSearchQuery] = useState('');
  const classes = useStyles();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchQuery !== '') {
      setLoader(true);
      getRecipes(searchQuery).then(() =>
        setTimeout(setLoader(false), 1000)
      );
    }
  };

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='searchQuery'
              name='searchQuery'
              value={searchQuery}
              onChange={handleQueryChange}
              autoComplete='off'
              label='enter recipe'
              variant='outlined'
              size='small'
              margin='none'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
            >
              {/* <ClearIcon style={{ fontSize: 18 }}/>&nbsp; */}
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
