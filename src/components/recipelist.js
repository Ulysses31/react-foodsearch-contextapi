import React, { useContext } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalContext } from '../context/globalstate';
import Recipe from './recipe';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}));

export default function RecipeList() {
  const { recipes } = useContext(GlobalContext);
  const { isLoading, setLoader } = useContext(
    GlobalContext
  );
  const classes = useStyles();

  const handleBackdropClose = () => {
    setLoader(false);
  };

  return (
    <>
      <Backdrop
        className={classes.backdrop}
        open={isLoading}
        onClick={handleBackdropClose}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <Grid container spacing={3}>
        {recipes.map((item) => (
          <Recipe
            recipeItem={item}
            key={item.recipe.label}
          />
        ))}
      </Grid>
    </>
  );
}
