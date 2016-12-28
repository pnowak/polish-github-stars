'use strict';

import status from './src/status';
import json from './src/json';

const loc = 'https://api.github.com/search/users?q=location:poland';
const stars = 'https://api.github.com/search/repositories?q=stars:%3E100&order=desc';

fetch(stars)
    .then(status)
    .then(json)
    .then(function(data) {
    	console.log(data);
    })
    .catch(function(error) {
      	console.log('Request failed', error);
    });