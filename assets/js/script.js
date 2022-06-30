var searchFormEl = document.querySelector("#search-form");
var cityInputEl = document.querySelector("#city");

var formSubmitHandler = function(event) {
    event.preventDefault();

    var city = cityInputEl.value.trim();

    if (city) {
        console.log(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter the name of your city.")
    }
}



searchFormEl.addEventListener("submit", formSubmitHandler);