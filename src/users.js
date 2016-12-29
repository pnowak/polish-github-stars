'use strict';

function filterUsers(data) {
	let users = data.items.filter(function (item, index) {
		for (let i in item) {
			if (i === 'owner') {
				for (let j in item[i]) {
					if ((j === 'type') && (item[i][j] === 'User')) {
						return item[i];
					}
				}
			}
		}
	});

	return users;
}

export default filterUsers;