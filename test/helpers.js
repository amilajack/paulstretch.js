var assert = require('assert')

exports.assertDeepApproxEqual = function(actual, expected, tolerance) {
    assert.equal(actual.length, expected.length)
    var i, length, diff
    for (i = 0, length = actual.length; i < length; i++) {
        diff = Math.abs(expected[i] - actual[i])
        if (diff > tolerance) assert.deepEqual(actual, expected)
        else assert.ok(diff <= tolerance)
    }
}

exports.blockToArrays = function(block) {
    var arrays = []
    for (var ch = 0; ch < block.length; ch++)
    arrays.push([].slice.call(block[ch], 0))
    return arrays
}