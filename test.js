const fetch = require('.index.js');
//here you can change the api
fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(answer) {
        console.log(answer);
    }).catch(function(err) {
        console.error(err);
    });
