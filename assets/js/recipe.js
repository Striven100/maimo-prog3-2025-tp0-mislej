const main = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
  
    if (!id) {
      document.body.innerHTML = "<h2>Receta no encontrada</h2>";
      return;
    }
  
    const API_URL = `https://dummyjson.com/recipes/${id}`;
    const response = await fetch(API_URL);
    const recipe = await response.json();
  
    document.querySelector('.receta-container').innerHTML = `
      <h1>${recipe.name}</h1>
      <img src="${recipe.image}" alt="${recipe.name}">
      <p><strong>Tiempo de preparación:</strong> ${recipe.prepTimeMinutes} min</p>
      <p><strong>Tiempo de cocción:</strong> ${recipe.cookTimeMinutes} min</p>
      <p><strong>Ingredientes:</strong></p>
      <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
      <p><strong>Instrucciones:</strong></p>
      <ol>${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}</ol>
      <button onclick="window.location.href='index.html'">Volver</button>
    `;
  };
  
  main();  