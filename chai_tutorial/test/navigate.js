const assert = require('chai').assert;


describe('test',function(){
    it('User should be able to launch home page of chaijs.com', () => {
        browser.url('https://www.chaijs.com');
        const title = browser.getTitle();
        browser.pause(1000);
        assert(title === 'Chai', "title is not Chai");
    });
})