var chai = require('chai')
var mocha = require('mocha')
var expect = chai.expect
var Queue = require('../queue')

describe('Queue Interface tests', () => {
    it('Test that returned interface is immutable', () => {
        let queue = new Queue()
        expect(queue).to.be.frozen
    })
    
})