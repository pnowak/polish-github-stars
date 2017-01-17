'use strict';

import status from './src/status';
import json from './src/json';
import urls from './src/urls';
import fetchUrls from './src/fetchUrls';

const loc = 'https://api.github.com/search/users?q=location:poland';
const stars = 'https://api.github.com/search/repositories?q=stars:%3E100&order=desc';

fetch(loc)
    .then(status)
    .then(json)
    .then(function (data) {
        const url = urls(data);
        return url;
    })
    .then(function (url) {
    	const fetchUrl = fetchUrls(url);
        return fetchUrl;
    })
    .then(function (fetchUrl) {
        console.log(fetchUrl);
    })
    .catch(function(error) {
      	console.log('Request failed', error);
    });