var assert = require('assert');
var assertEquals = assert.equal;
var assertDeepEquals = assert.deepEqual;
var assertThrows = assert['throws'];

require('../regexp-prototype-search.js');

assertEquals(RegExp.prototype.search.length, 1);
assertEquals(RegExp.prototype.propertyIsEnumerable('search'), false);

assertThrows(function() { RegExp.prototype.search.call(undefined, 'x'); }, TypeError);
assertThrows(function() { RegExp.prototype.search.call(null, 'x'); }, TypeError);
assertThrows(function() { RegExp.prototype.search.call(true, 'x'); }, TypeError);
assertThrows(function() { RegExp.prototype.search.call(false, 'x'); }, TypeError);
assertThrows(function() { RegExp.prototype.search.call('x', 'x'); }, TypeError);
assertThrows(function() { RegExp.prototype.search.call(42, 'x'); }, TypeError);
assertThrows(function() { /a/.search({ 'toString': function() { throw RangeError(); } }); }, RangeError);
assertThrows(function() { RegExp.prototype.search.call({ 'exec': function() { throw RangeError(); }}, 'x'); }, RangeError);
assertThrows(function() { RegExp.prototype.search.call({ 'exec': function() { return undefined; }}, 'x'); }, TypeError);
assertThrows(function() { RegExp.prototype.search.call({ 'exec': function() { return true; }}, 'x'); }, TypeError);
assertThrows(function() { RegExp.prototype.search.call({ 'exec': function() { return false; }}, 'x'); }, TypeError);
assertThrows(function() { RegExp.prototype.search.call({ 'exec': function() { return 'x'; }}, 'x'); }, TypeError);
assertThrows(function() { RegExp.prototype.search.call({ 'exec': function() { return 42; }}, 'x'); }, TypeError);

var tests = {
	'abc': /a/,
	'ababab': /a/g,
	'bcd': /x/g
};

Object.keys(tests).forEach(function(string) {
	var regex = tests[string];
	var a = regex.search(string);
	var lastIndexA = regex.lastIndex;
	var b = string.search(regex);
	var lastIndexB = regex.lastIndex;
	assertDeepEquals(a, b);
	assertEquals(lastIndexA, lastIndexB);
});

var tmp = 0;
assertDeepEquals(/a/.search({ 'toString': function() { ++tmp; return 'a'; } }), 'a'.search(/a/));
assertEquals(tmp, 1);
