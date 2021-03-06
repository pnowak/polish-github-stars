'use strict';

function get(url) {
    return new Promise((succeed, fail) => {
        const req = new XMLHttpRequest();

        req.open('GET', url, true);

        req.addEventListener('load', () => {
            if (req.status < 400) {
                succeed(JSON.parse(req.responseText));
            }
            else {
                fail(new Error('Request failed: ' + req.statusText));
            }
        });

        req.addEventListener('error', () => {
            fail(new Error('Network error'))
        });

        req.send(null);
    });
}

export default get;
