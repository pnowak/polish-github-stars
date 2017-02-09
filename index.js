'use strict';

import urls from './src/urls';
import users from './src/users';
import get from './src/get';

const loc = 'https://api.github.com/search/users?q=location:poland';
const stars = 'https://api.github.com/search/repositories?q=stars:%3E100&order=desc';

get(loc)
    .then(function (data) {
        const url = urls(data);
        return url;
    })
    .then(function (url) {
        const user = users(url);
        return user;	
    })
    .then(function (user) {
         console.log(user);
    })
    .catch(function(error) {
      	console.log('Request failed', error);
    });