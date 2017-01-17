'use strict';

import status from './status';
import json from './json';

function fetchUrls(data) {
	return data.forEach(function (url, index) {
		fetch(url);
	});
}

export default fetchUrls;