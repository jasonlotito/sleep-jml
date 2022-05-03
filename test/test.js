const {sleep, msleep} = require('..');
const assert = require('assert');
const mocha = require('mocha')
describe('sleep', () => {
    it('will sleep for at least a second', () => {
        let then = Date.now();
        sleep(1);
        assert.ok(Date.now() - then >= 1000)
    })
});

describe('msleep', () => {
    it('will sleep for at leats 500 milliseconds', () => {
        let then = Date.now();
        msleep(500);
        assert.ok(Date.now() - then > 500);
    })
})
