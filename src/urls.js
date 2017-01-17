'use strict';

function urls(data) {
	const urlsArray = [];
	
	data.items.filter(function (item, index) {
		for (let i in item) {
			if (i === 'url') {
				urlsArray.push(item[i]);
			}
		}
	});

	return urlsArray;
}

export default urls;