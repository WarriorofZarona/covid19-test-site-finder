$(document).ready(function() {
    // This file just does a GET request to get testing locations
    // and updates the HTML on the page
    $.get("api/sites/approved").then(function(data) {

        var njData = '';
        $.each(data, function(i, value) {
            njData += '<tr>';
            njData += '<td>' + data[i].name + '</td>';
            njData += '<td>' + data[i].address + '</td>';
            njData += '<td>' + data[i].City.name + '</td>';
            njData += '<td>' + data[i].City.State.name + '</td>';
            njData += '<td>' + data[i].phone + '</td>';
            njData += '<td>' + data[i].qualifications + '</td>';
            njData += '</tr>'
        });
        $('#testLocationTable').append(njData)
    });


});