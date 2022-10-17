import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import icon from '../img/icons.svg';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const renderSpinner = function (parentEL) {
  const markup = `
       <div class="spinner">
          <svg>
            <use href="${icon}#icon-loader"></use>
          </svg>
        </div>
  `;
  parentEL.innerHTML = '';
  parentEL.insertAdjacentHTML('afterbegin', markup);
};

///////////////////////////////////////
const showRecipe = async function () {
  try {
    const id = window.location.hash;

    if (!id) return;
    renderSpinner(recipeContainer);
    await model.loadedRecipe('5ed6604591c37cdc054bc886');
    // 1) loading recipe

    // 2) Render recipe
    recipeView.render(model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe);

    const { recipe } = model.state;
    console.log(recipe);
    
  } catch (err) {
    console.log(err);
  }
};

['hashchange', 'load'].forEach(e => window.addEventListener(e, showRecipe));
// showRecipe();
