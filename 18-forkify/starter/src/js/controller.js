import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipe = async function () {
  try {
    const id = window.location.hash;
    // if (!id) return;
    recipeView.renderSpinner();

    // 1) LOAD RECIPE
    await model.loadedRecipe('5ed6604591c37cdc054bcac4');

    // 2) RENDER RECIPE
    recipeView.render(model.state.recipe);
  } catch (err) {
    // RENDER ERROR MESSAGE TO USER
    errorHandler();
  }
};

// APP FIRST STARTUP
const init = function () {
  recipeView.addHandlerRender(controlRecipe);
};
init();

// USER'S ERROR MESSAGE
const errorHandler = function (err) {
  recipeView.renderError(err);
};
