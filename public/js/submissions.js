$(document).ready(function() {


    $.get("/cities/new-jersey").then(function(data) {

        $("#source").change(function() {

            var el = $(this);

            if (el.val() === "New Jersey") {
                $("#status").empty()
                for (let i = 0; i < data.length; i++) {
                    $('#status').append('<option>' + data[i].name + '</option>');
                };
            } else if (el.val() === "New York") {
                $("#status").empty()
                $("#status").append("  <option>Albany</option>  <option>Buffalo</option>  <option>Ithaca</option> <option>New York City</option>");
            } else if (el.val() === "Pennsylvania") {
                $("#status").empty()
                $("#status").append("  <option>Aliquippa</option> <option>Philadelphia</option> <option>Pittsburgh</option> ");
            }
        });

    });


});