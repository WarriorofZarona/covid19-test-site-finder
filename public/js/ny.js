$(document).ready(function() {
    // This file just does a GET request to get testing locations
    // and updates the HTML on the page
    $.get("/api/newyork").then(function(data) {
        $(".testingLocations").text(data.name);
    });
});