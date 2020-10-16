const run = require('../run/run');

function request(url) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(url);
		}, 0)
	})
}

function *foo(val) {
	if (val > 1) {
		// 递归委托
		val = yield *foo( val - 1 );
	}

	return yield request( "http://some.url/?v=" + val );
}

function *bar() {
	var r1 = yield *foo( 3 );
	console.log( r1 );
}

run( bar );