const assert = require('chai').assert;
const apps = require('../src/Practice');
const request = require('request');

describe('Customer', function(){
    it('getCustomers',function(){
        assert.equal(apps.get(),JSON.stringify([
            {id : 1, name : "Arun" },
            {id : 2, name : "Kumar"}
          ]));
    });
    it('post',function(){
        var response = apps.post({id : 3,name : "ibdat"});
        assert.equal(response,JSON.stringify([
            {id : 1, name : "Arun" },
            {id : 2, name : "Kumar"},
            {id  :3, name : "ibdat"}
          ]))
    })
});