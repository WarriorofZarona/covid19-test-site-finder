const axios = require("axios")

module.exports = () => {

    axios.get("https://gist.githubusercontent.com/Lwdthe1/81818d30d23f012628aac1cdf672627d/raw/45dc8bee7b4fc349ec87931100e0f258bb59f8ea/usaCities.js")
        .then(data => {
            cityJSON = JSON.parse(data)
            console.log(cityJSON);
        })







}