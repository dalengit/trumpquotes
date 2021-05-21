// const axios = require('axios').default;
    
function getRequest(){
    console.log('hello');
        const options = {
    method: 'GET',
    url: 'http://tronalddump.io/random/quote'
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        let parsedQuote = response.data.value;
        console.log(parsedQuote);
    }).catch(function (error) {
        console.error(error);
    });
}