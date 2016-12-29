'use strict';

import status from './src/status';
import json from './src/json';
import filterUsers from './src/users';

const loc = 'https://api.github.com/search/users?q=location:poland';
const stars = 'https://api.github.com/search/repositories?q=stars:%3E100&order=desc';

fetch(stars)
    .then(status)
    .then(json)
    .then(function (data) {
        const users = filterUsers(data);
        return users;
    })
    .then(function (users) {
    	console.log(users);
    })
    .catch(function(error) {
      	console.log('Request failed', error);
    });