import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

export default function Ingredient({ ingredient }) {
  return (
    <Typography
      variant='body2'
      color='textSecondary'
      component='p'
    >
      {ingredient.text}
    </Typography>
  );
}

// ****** Props Validations ********
Ingredient.propTypes = {
  ingredient: PropTypes.object.isRequired
};
