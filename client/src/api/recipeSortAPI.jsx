export const filterRecipes = (recipes) => {
    let filteredRecipes = recipes;
    filteredRecipes.sort((a, b) => {
      return new Date(b.recipe.created).getTime() - new Date(a.recipe.created).getTime()
    });

    return filteredRecipes;
  };

export const filterHistory = (history) => {
  let filteredHistory = history;
  filteredHistory.sort((a, b) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime()
  });

  return filteredHistory;
};