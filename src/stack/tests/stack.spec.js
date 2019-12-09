var chai = require('chai')
var mocha = require('mocha')
var expect = chai.expect
var Stack = require('../stack')

describe('Stack Interface tests', () => {
    it('Test that returned interface is immutable', () => {
        let _stack = new Stack()
        expect(_stack).to.be.frozen
    })
    it('Test that push adds onto the stack', () => {
        let _stack = new Stack()
        _stack.push('Lusiba')
        expect(_stack.items.length).to.be.equal(1)
    })
    it('Test that pop removes and returns item from top of stack', () => {
        let _stack = new Stack()
        _stack.push('Lusiba')
        _stack.push('Cedric')
        let popped = _stack.pop('Cedric')
        expect(popped).to.be.equal('Cedric')
        expect(_stack.items.length).to.be.equal(1)
    })
    it('Test that shift removes item to bottom of stack', () => {
        let _stack = new Stack()
        _stack.push('Xstate')
        _stack.push('Lusiba')
        _stack.push('Cedric')
       
        let shifted = _stack.shift()
        expect(shifted).to.be.equal('Xstate')
        expect(_stack.items.length).to.be.equal(3)
    })
})