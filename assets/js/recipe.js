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
            <div class="card" onclick="displayRecipe()">
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

function displayRecipe(count) {
  console.log("Successfully clicked on Recipe Card!");

  let indexResult = '';
  $('#modal-recipe').foundation('open');

}


/*
<div class="large reveal" id="modal-recipe" data-reveal>  
          <button class="close-button" data-close aria-label="Close reveal" type="button>
                <span aria-hidden="true">&times;</span>
              </button>
          <hr id="break">
          <div class="grid-x grid-padding-x align-center">
              <div class="small-6 medium-6">
                <h1 class="text-center">2 Da Moon!</h1>
              </div>
            </div>
            <hr id="break">
            <div class="grid-x align-center text-center">
              <div class="small-4 medium-4">
                <h6>Service Size: </h6>
              </div>
              <div class="small-4 medium-4">
                <h6>Prep Time: </h6>
              </div>
              <div class="small-4 medium-4">
                <h6>Cook Time: </h6>
              </div>
            </div>
            <hr id="break">
            <div class="grid-x grid-padding-x align-center">
              <div class="medium-4">
                <img src="">
              </div>
              <div class="medium-7">
                <h3>Ingredients:</h3>
              </div>
            </div>
            <hr id="break">
          <div class="grid-x">
            <div class="cell">
              <h3>Instructions:</h3>
              <p>kajsdf;lkjasldkjflkajsdlkfjasdlkjf</p>
              <p>kajs;dlkjflkajsdfkljasldkjfklajsdfkljal</p>
              <p>kajsd;lfj;lkajsdlkfj;aldjsf;lkjasdlkfja;ldsjflkajsd;lfjaldksjf;lkjasdlkfjsldkjf</p>
            </div>
          </div>
        </div>
*/