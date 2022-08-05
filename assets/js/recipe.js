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
    const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}
/*
function generateHTML(results){
    const genereatedHTML = '';
    results.map(results => (){
        genereatedHTML +=
        `
            // insert html code here.
        
        `
    
    })
}
*/