const main = async () => {
  const API_URL = `https://dummyjson.com/recipes?limit=6&skip=0`;
  const response = await fetch(API_URL);
  const recipes = await response.json();

  const recetasGrid = document.querySelector('.recetas_grid');

  recipes.recipes.forEach(recipe => {
    recetasGrid.innerHTML += `
      <div class="receta">
        <img src="${recipe.image}" alt="${recipe.name}" />
        <h3>${recipe.name}</h3>
        <a href="recipe.html?id=${recipe.id}" class="ver-mas">Ver más</a>
      </div>
    `;
  });
};

main();