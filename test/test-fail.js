var assert = require('chai').assert;

describe("A test example", function()
{
    it("should detect falsehoods", function(done)
    {
        assert.isFalse(2 + 2 == 5);
        assert.isFalse("Your mother" == "a nice lady");

        done();
    });
});