$(document).ready(function() {
    // This file just does a GET request to figure out which admin is logged in
    // and updates the HTML on the page
    $.get("/api/admin_data").then(function(data) {
      $(".member-name").text(data.email);
    });
  });
  