"use strict";

const axios = require('axios');

// Make a request for a api with a given URL
axios.get('https://dog.ceo/api/breeds/list/all')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

