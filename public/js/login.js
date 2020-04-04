$(document).ready(function () {
    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function (event) {
        event.preventDefault();
        var adminData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!adminData.email || !adminData.password) {
            return;
        }

        // If we have an email and password we run the loginAdmin function and clear the form
        loginAdmin(adminData.email, adminData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginAdmin does a post to our "api/login" route and if successful, redirects us the the members page
    function loginAdmin(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        })
            .then(function () {
                window.location.replace("/admin");
                // If there's an error, log the error
            })
            .catch(function (err) {
                console.log(err);
            });
    }
});
