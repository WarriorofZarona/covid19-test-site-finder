$(document).ready(function () {
    // This file just does a GET request to get testing locations
    // and updates the HTML on the page
    $.get("/cities/new-jersey").then(function (data) {

        for (let i = 0; i < data.length; i++) {
            $(".testingLocations").text(JSON.stringify(data[i].name));
        }
    });
});