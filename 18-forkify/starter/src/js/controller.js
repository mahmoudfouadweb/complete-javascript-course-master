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
    // 1) loading recipe
    await model.loadedRecipe('5ed6604591c37cdc054bcac4');

    // 2) Render recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    errorHandler();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
};
init();

const errorHandler = function (err) {
  recipeView.renderError(err);
};
