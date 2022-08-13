$(document).foundation()

const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('#results');
const container = document.querySelector('.grid-container');
let searchQuery = '';
const APP_ID = '3e3d57ce';
const APP_KEY = '765c0b71a3803819945ff09b1032414f';



searchForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log('Button was successfully registered')

    fetchAPI();
});

async function fetchAPI () {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=24`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data.hits[0]);
}

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
              </div>
            </div>
          </div>
        
        `
    })
    searchResultDiv.innerHTML = generatedHTML;
}

