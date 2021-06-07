// const axios = require('axios').default;
    
function getRequest(){
        const options = {
    method: 'GET',
    url: 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'
    };

    axios.request(options).then(function (response) {
        console.log(response);
        let parsedQuote = response.data.message;
        console.log(parsedQuote);
        var quote = document.getElementById('quote');
        quote.innerText = "\"" + parsedQuote + "\"";
    }).catch(function (error) {
        console.error(error);
    });
}