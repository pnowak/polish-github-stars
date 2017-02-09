'use strict';

import get from './get';

function users(data) {
	return data.forEach(function (item, index) {
		console.log(item);
        get(item);
	});
}

export default users;