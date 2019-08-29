const curry = require('../dist/main.cjs')

const assert = require('assert');

const sum = (a, b, c) => a + b + c
const curriedSum = curry(sum)

assert.equal(curriedSum(2)(2, 3), 7)
assert.equal(curriedSum(2, 2, 3), 7)
assert.equal(curriedSum(2, 2)(3), 7)
assert.equal(curriedSum(2)(2)(3), 7)

const sumN = (...args) => args.reduce((a, b) => a + b)
const curriedSumN = curry(sumN, 3)

assert.equal(curriedSumN(2)(2, 3), 7)
assert.equal(curriedSumN(2, 2, 3), 7)
assert.equal(curriedSumN(2, 2)(3), 7)
assert.equal(curriedSumN(2)(2)(3), 7)
