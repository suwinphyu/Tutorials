var should = require('chai').should();

var foo = 'bar';
foo.should.be.a('string');
foo.should.equal('bar');
foo.should.to.have.lengthOf(3);

var beverages = {tea : ['chai','mocha','oolong','expresso']};
beverages.should.to.have.property('tea').with.lengthOf(4);


var actual_answer = 43;
var expected_answer = 43;
actual_answer.should.to.equals(expected_answer);
actual_answer.should.to.equals(42,"!!!Actual answer and expected one are different")