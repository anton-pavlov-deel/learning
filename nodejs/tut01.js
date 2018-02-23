'use strict';

let obj = {
	name: "Blabla",
	age: 20,
	embedded: {
		first: 25,
		second(a=0, ...b) {
			b.forEach(n => a+=n);
			return a;
		} 
	}
};

let {name: N, embedded: { second: S } } = obj;

console.log(N, S);
