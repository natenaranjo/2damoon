$(document).foundation()

const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('#results');
const container = document.querySelector('.grid-container');
let searchQuery = '';

searchForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log('Button was successfully registered')

    fetchAPI();
});

async function fetchAPI () {
    const baseURL = `www.thecocktaildb.com/api/json/v1/1/random.php`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}
/*
function generateHTML(results){
    let generatedHTML = '';
    results.map(results => {
        generatedHTML +=
        `
          <div class="cell">
            <div class="card">
              <img src="${results.recipe.image}">
              <div class="card-section">
                <h4>${results.recipe.label}</h4>
                <hr id="break">
                <p>Dish: ${results.recipe.dishType}</p>
                <p>Ethnicity Type: ${results.recipe.cuisineType}</p>
                <p>Ingredients: $(results.)
              </div>
            </div>
          </div>
        
        `
    
    })
    searchResultDiv.innerHTML = generatedHTML;
}
*/

function call(){
  for(i = 0; i < 5; i++){
   let count = "strIngredient" + [i];
   
  }
};

call();


