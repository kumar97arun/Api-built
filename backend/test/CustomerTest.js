const assert = require('chai').assert;
const apps = require('../src/Customer');
const request = require('request');

describe('Customer', function(){
    it('getCustomers',function(){
        assert.equal(apps(),JSON.stringify([
            {id : 1, name : "Arun" },
            {id : 2, name : "Kumar"}
          ]));
    });
});