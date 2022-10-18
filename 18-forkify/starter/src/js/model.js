import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
};

export const loadedRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (e) {
    throw e;
  }
};

const loadSearchResults = async function (query) {
  try {
    const data = await getJSON(
      // `${API_URL}?search=pizza`
      `${API_URL}?search=${query}`
    );

    const {recipes} = data.data;
    console.log(recipes);
  } catch (err) {
    console.log(`${e} 💥`);
    throw err;
  }
};
loadSearchResults('pizza');
