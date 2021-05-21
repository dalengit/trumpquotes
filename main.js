// const axios = require('axios').default;
    
function getRequest(){
        const options = {
    method: 'GET',
    url: 'http://tronalddump.io/random/quote'
    };

    axios.request(options).then(function (response) {
        let parsedQuote = response.data.value;
        console.log(parsedQuote);
        var quote = document.getElementById('quote');
        quote.innerText = "\"" + parsedQuote + "\"";
    }).catch(function (error) {
        console.error(error);
    });
}