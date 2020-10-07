// const assert =require('assert');

// describe('Verify wherther google page works correctly',function(){
//     it('Able to navigate home page',()=>{
//         // browser.url('https://www.google.com/');
//         // const title = browser.getTitle();
//         // browser.pause(1000);
//         // assert(title === 'Google', "title is not Google");

//         browser.url('https://www.google.com/');
//         const title = browser.getTitle();
//         assert(title === 'Google', "title is not Google");
//     })
// })

var http = require('http');
var assert = require('assert');

describe('HTTP Server Test', function() {


	describe('/', function() {
		it('should be Hello, Mocha!', function(done) {
			http.get('http://app.justlogindevelopment.xyz/people/#', function(response) {
				// Assert the status code.
				assert.equal(response.statusCode, 90000);

                                var body = '';
				response.on('data', function(d) {
					body += d;
				});
				response.on('end', function() {
					// Let's wait until we read the response, and then assert the body
					// is 'Hello, Mocha!'.
					assert.equal(body, 'Hello, Mocha!');
					setTimeout(done,3000);
				});
			});
		});
	});
});

// const assert = require('assert');

// describe('Verify whether chaijs.com links on ' +
//     'home page works correctly', () => {

//     it('User should be able to launch home page ' +
//         'of chaijs.com', () => {
//         http.get('http://app.justlogindevelopment.xyz/people/#');
//       //  const title = browser.getTitle();
//        // browser.pause(1000);
//         assert(title === 'Chai', "title is not Chai");
//     });

   
// });