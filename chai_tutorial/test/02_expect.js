var expect = require('chai').expect;

var foo = 'bar';
expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);

var beverages = {tea : ['chai','mocha','oolong','expresso']};
expect(beverages).to.have.property('tea').with.lengthOf(3);

var actual_answer = 43;
var expected_answer = 43;
expect(actual_answer).to.equal(expected_answer);
expect(actual_answer,"!!!Actual answer and expected one are different").to.equal(43);