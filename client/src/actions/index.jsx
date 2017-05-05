import axios from 'axios';
import history from './../history/history';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPE = 'FETCH_RECIPE';
export const FETCH_HISTORY = 'FETCH_HISTORY';
export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const CLEAR_STATE = 'CLEAR_FORM';
export const TOGGLE_SHOW_HISTORY = 'TOGGLE_SHOW_HISTORY';
export const RESET_SHOW_HISTORY = 'RESET_SHOW_HISTORY';

export const fetchRecipes = (recipes) => {
  return (
    {
      type: FETCH_RECIPES,
      payload: recipes
    }
  )

};

export const startFetchRecipes = () => {
  return (dispatch, getState) => {
    axios.get('/recipes').then(({data}) => {
      dispatch(fetchRecipes(data));
    })
  }
};

export const fetchRecipe = (recipe) => {
  return (
    {
      type: FETCH_RECIPE,
      payload: recipe
    }
  )
};

export const startFetchRecipe = (id) => {
  return (dispatch, getState) => {
    axios.get(`/recipes/${id}`).then(({data}) => {
      // history.push(`/${id}/edit`);
      dispatch(fetchRecipe(data));
    })
  }
};

export const addRecipe = () => {
  return (
    {
      type: ADD_RECIPE,
    }
  )
};

export function startAddRecipe (text) {
  return (dispatch, getState) => {
     axios.post('/recipes', text).then(({data}) => {
      history.push('/');
      dispatch(addRecipe());
    }).catch(response => {
      console.log(response)
      //callingRefresh(response,"/feature",dispatch);
    });
  }
};

export const updateRecipe = () => {
  return (
    {
      type: UPDATE_RECIPE,
    }
  )
};

export const startUpdateRecipe = (props, id) => {
  return (dispatch, getState) => {
    axios.put(`/recipes/${id}`, props).then(function (response) {
      history.push('/');
      dispatch(updateRecipe());
    })
  }
};

export const clearState = () => {
  return (
    {
      type: CLEAR_STATE,
      payload: null
    }
  )
};

export const toggleShowHistory = () => {
  return {
    type: TOGGLE_SHOW_HISTORY
  };
};

export const resetShowHistory = () => {
    return {
        type: RESET_SHOW_HISTORY
    };
};

export const fetchHistory = (history) => {
  return (
    {
      type: FETCH_HISTORY,
      payload: history
    }
  )

};

export const startFetchHistory = (id) => {
  return (dispatch, getState) => {
    axios.get(`/${id}/history`).then(({data}) => {
      dispatch(fetchHistory(data));
    })
  }
};
