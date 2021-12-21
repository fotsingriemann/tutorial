
const names = require('./name');
const sayHi = require('./util');
const data = require('./favor');

require('./grenade');

console.log(__filename);

sayHi.sayHi('susan');
sayHi.sayGood(names.john);
sayHi.sayHi(names.peter);