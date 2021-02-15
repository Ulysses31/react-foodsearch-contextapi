import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AppReducer from './reducer';

const initialState = {
  isLoading: false,
  recipes: []
};

export const GlobalContext = createContext(initialState);

export default function GlobalContextProvider({
  children
}) {
  const [state, dispatch] = useReducer(
    AppReducer,
    initialState
  );

  const APP_ID = '0a1c4ddc';
  const APP_KEY = '1744c3b90e8317fdbd86a9734a11e6b9';
  let ApiUrl = '';

  const getRecipes = async (q) => {
    ApiUrl = `https://api.edamam.com/search?q=${q}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const result = await axios.get(ApiUrl);

    dispatch({
      type: 'GET_RECIPES',
      payload: result.data.hits
    });
  };

  const setLoader = (status) => {
    dispatch({
      type: 'SET_ISLOADING',
      payload: status
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoading: state.isLoading,
        recipes: state.recipes,
        setLoader,
        getRecipes
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// ****** Props Validations ********
GlobalContextProvider.propTypes = {
  children: PropTypes.object.isRequired
};
