console.log("./assets/js/cocktail.js  was successfully loaded.");

const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('#resultsct');
const container = document.querySelector('.grid-container');
let searchQuery = '';

searchForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log('Button was successfully registered')

    fetchAPI();
});

async function fetchAPI () {
    const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchQuery}`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.drinks);
    console.log(data);
}

function generateHTML(drinks){
    let generatedHTML = '';
    drinks.map(drinks => {
        generatedHTML +=
        `
          <div class="cell">
            <div class="card">
              <img src="${drinks.strDrinkThumb}">
              <div class="card-section">
                <h4>${drinks.strDrink}</h4>
                <hr id="break">
                <p>Category: ${drinks.strCategory}</p>
              </div>
            </div>
          </div>
        
        `
    })
    searchResultDiv.innerHTML = generatedHTML;
}















/*
baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

fetch(baseURL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let cocktails = data;

        cocktails.map(function(cocktail) {
            let card = document.createElement('div');
            let 
        })
    }

function call(){
  for(i = 0; i < 5; i++){
   let count = "strIngredient" + [i];
   
  }
};

call();
*/