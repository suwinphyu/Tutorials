var assert = require('chai').assert;

var foo = 'bar';
assert.typeOf(foo,'string');
assert.equal(foo,'bar');
assert.lengthOf(foo,3);


var beverages = {tea : ['chai','mocha','oolong','expresso']};
assert.property(beverages,'tea');
assert.lengthOf(beverages.tea,4);


var actual_answer = 43;
var expected_answer = 43;
assert.equal(actual_answer,expected_answer);
assert.equal(actual_answer,42,'!!!Actual answer and expected one are different');