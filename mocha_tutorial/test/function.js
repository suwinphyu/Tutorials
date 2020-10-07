var assert = require('assert');

describe('Test Suites',function(){
    
  it('Addition of two numbers', function(){
    var a = 10;
    var b = 10;
    var c = a+b;
    assert.equal(c,20);
   
  });

  it.skip('Subtraction of two numbers',function(){
      var a = 67.54;
      var b = 20;
      var result = a-b;
      assert.equal(result.toFixed(2),47.54);
  })

  it('Pending test without callback function')

})