document
  .getElementById("ratingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to server

    // Show thanks page, and hide rating page
    var ratintPage = document.querySelector(".rating_page");
    var thanksPage = document.querySelector(".thanks_page");
    ratintPage.classList.add("hide");
    thanksPage.classList.add("show");

    // Get all radio buttons with name "rating"
    var ratingRadios = document.getElementsByName("rating");
    // Initialize a variable to hold the selected rating value
    var selectedRating = null;

    // Loop through the radio buttons to find the checked one
    for (var i = 0; i < ratingRadios.length; i++) {
      if (ratingRadios[i].checked) {
        selectedRating = ratingRadios[i].value;
        break;
      }
    }

    // Display the result
    var answerElement = document.getElementById("answer");
    if (selectedRating) {
      answerElement.innerHTML = selectedRating;
    } else {
      answerElement.innerHTML = "0";
    }
  });
