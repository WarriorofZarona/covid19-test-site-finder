// This is middleware for restricting routes a admin is not allowed to visit if not logged in
module.exports = function(req, res, next) {
    // If the admin is logged in, continue with the request to the restricted route
    if (req.admin) {
      return next();
    }
  
    // If the admin isn't logged in, redirect them to the login page
    return res.redirect("/");
  };