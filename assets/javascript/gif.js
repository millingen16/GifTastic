


//Declear all my variables.
//var apikey = "&=api_key=b6zsw4PeQAFHchNPm6djp1Muzll8J4CQ";
//var webPage = "http://api.giphy.com/v1/gifs/search?q=";

//console.log("test");
//console.log(this);
$(document).on("click", "button", function() {

//$("button").on("click", function() {
    var animal = $(this).attr("data-animal");
    console.log(this);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal +
     "&api_key=b6zsw4PeQAFHchNPm6djp1Muzll8J4CQ&limit=5";

    //var query = webPage.animal.apikey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(queryURL);
        console.log(response);

    var results = response.data;
    
    for(var i = 0; i < results.length; i++) {
        console.log(results);
        var contentDiv = $("<div>");
        var p = $("<p>").text("rating: " + results[i].rating);
        var contentImage = $("<img>");
        contentImage.attr("src", results[i].images.fixed_height.url);
        contentDiv.append(p);
        contentDiv.append(contentImage);

        $("#gif").append(contentDiv);

    }
    console.log(results);

    });

    $("#inputAnimal4").on("click", function(event) {
        event.preventDefault();
        var userInput = $("#inputAnimal4").val().trim();
        animal.push(userInput);
        var b = $("<button>");
        b.addClass("new-animal");
        b.attr("#data-animal");
        b.text("userInput");
        $("new-animal").apeend(b);
    });

//});

});

