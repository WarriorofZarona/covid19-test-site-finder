$(document).ready(function() {
    // This file just does a GET request to get testing locations
    // and updates the HTML on the page
    $.get("/cities/new-jersey").then(function(data) {

        /*  for (let i = 0; i < 10; i++) {
              $(".testingLocations").text(JSON.stringify(data[i].name));
          } */

        var njData = '';
        $.each(data, function(i, value) {
            njData += '<tr>';
            njData += '<td>' + data[i].name + '</td>';
            njData += '<td>' + data[i].State.name + '</td>';
            njData += '</tr>'
        });
        $('#testLocationTable').append(njData)
    });


});