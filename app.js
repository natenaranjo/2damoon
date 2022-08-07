function getRecipe() {
  //Getting the value of the user specified food selection//
  var foodSelection = $("input[name=selector]:checked").val();

  //Recipe URL with user specified cuisine selection//
  var queryURLrec =
    "https://api.edamam.com/search?q=" +
    foodSelection +
    "&app_id=" +
    id +
    "&app_key=" +
    key +
    "&from=0&to=50";

  //AJAX call getting each recipe ingredient list and link to the actual recipe//
  $.ajax({
    type: "GET",
    url: queryURLrec,
  }).then(function (response) {
    console.log(queryURLrec);
    console.log(response);

    //Page scroll animation//
    $("html, body").animate({ scrollTop: "700px" }, 1000);

    //Displaying the recipe card//
    $(".card").attr("class", "card");

    //Randomizing the food recipes to display a different recipe each time//
    var randFood = Math.floor(Math.random() * response.hits.length);
    console.log(response.hits.length);

    //Getting and appending the recipe title on the page//
    $(".card-title").html(response.hits[randFood].recipe.label);
    $(".card-text").empty();
    var list = $("<ul>");
    $(".card-text").append(list);

    //For loop to loop through the ingredient list and append them to the page//
    for (
      var i = 0;
      i < response.hits[randFood].recipe.ingredientLines.length;
      i++
    ) {
      var item = $("<li>");
      item.html(response.hits[randFood].recipe.ingredientLines[i]);
      list.append(item);
    }

    //Getting and appending the recipe image and link to the actual recipe//
    $(".card-img-top").attr("src", response.hits[randFood].recipe.image);
    $("#recipieLink").attr("href", response.hits[randFood].recipe.url);
    $(".card").css("border", "1px solid black");
  });
}

//Function that calls the food recipe function on click of the "Get Recipe" button//
$(function () {
  $("#save_value").click(function () {
    Recipe();
  });
});
