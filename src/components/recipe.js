import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Ingredient from './ingredient';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginRight: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Recipe({ recipeItem }) {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box boxShadow={3}>
        <Card className={classes.root} variant='outlined'>
          <CardHeader
            avatar={
              <Avatar
                aria-label='recipe'
                className={classes.avatar}
              >
                R
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title={
              recipeItem.recipe.label.slice(0, 20) + '...'
            }
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image={recipeItem.recipe.image}
            title='Paella dish'
          />
          <Collapse
            in={expanded}
            timeout='auto'
            unmountOnExit
          >
            <CardContent>
              <Typography
                variant='body1'
                color='textSecondary'
                component='h1'
              >
                <b>{recipeItem.recipe.label}</b>
              </Typography>
              <hr />
              {recipeItem.recipe.ingredients.map(
                (ingredient, i) => (
                  <Ingredient
                    ingredient={ingredient}
                    key={i}
                  />
                )
              )}
            </CardContent>
          </Collapse>
          <CardActions>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </IconButton>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon
                color={
                  recipeItem.recipe.bookmarked
                    ? 'primary'
                    : 'disabled'
                }
              />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}

// ****** Props Validations ********
Recipe.propTypes = {
  recipeItem: PropTypes.object.isRequired
};
