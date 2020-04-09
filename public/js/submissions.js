$(document).ready(function() {


    $.get("/cities/new-jersey").then(function(data) {

        $(".source").change(function() {

            var el = $(this);

            if (el.val() === "New Jersey") {
                $(".status").empty()
                for (let i = 0; i < data.length; i++) {
                    $('.status').append('<option>' + data[i].name + '</option>');
                };
            } else if (el.val() === "New York") {
                $(".status").empty()
                $(".status").append("  <option>Albany</option>  <option>Buffalo</option>  <option>Ithaca</option> <option>New York City</option>");
            } else if (el.val() === "Pennsylvania") {
                $(".status").empty()
                $(".status").append("  <option>Aliquippa</option> <option>Philadelphia</option> <option>Pittsburgh</option> ");
            }
        });

    });


});

function submitRequest() {
    $(".submissionForm").serialize() // returns all the data in your form
    var name = $("#name").val();
    var phone = $("#phone").val();
    var address = $("address").val();
    var state = $("#state").val();
    var city = $("#city").val();
    var open = $("#open").val();
    var close = $("#close").val();
    var walkIn = $("#walkin").val();
    var driveThru = $("#drivethru").val()
    var isHospital = $("hospital").val()
    var qualifications = $("qualifications").val()
    $.ajax({
        type: "POST",
        url: '/api/sites',
        data: {
            name: name,
            address: address,
            phone: phone,
            walkIn: walkIn,
            driveThru: driveThru,
            isHospital: isHospital,
            hoursOfOp: open + " to " + close,
            qualifications: qualifications,
            city: city,
        },
        success: function() {
            console.log("success");
            console.log();
        }
    });
}