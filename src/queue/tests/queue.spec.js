var chai = require('chai')
var mocha = require('mocha')
var expect = chai.expect
var Queue = require('../queue')

describe('Queue Interface tests', () => {
    it('Test that returned interface is immutable', () => {
        let queue = new Queue()
        expect(queue).to.be.frozen
    })
    it('Test enqueue adds to the end of the queue', () => {
        let queue = new Queue()
        queue.enqueue('Cedric')
        queue.enqueue('Lusiba')
        expect(queue.items[0]).to.be.equal('Cedric')
        expect(queue.items[1]).to.be.equal('Lusiba')
    })
    it('Test dequeue removes from top of queue', () => {
        let queue = new Queue()
        queue.enqueue('Cedric')
        queue.enqueue('Lusiba')
        let item  =  queue.dequeue();
        expect(item).to.be.equal('Cedric')
    })
    
})