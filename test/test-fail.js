var assert = require('chai').assert;

describe("A failing test example", function()
{
    it("should pass this test", function(done)
    {
        assert.isFalse(2 + 2 == 5);

        done();
    });

    it("should not pass this test", function(done)
    {
        assert.isTrue("Your mother" == "a nice lady");

        done();
    });
});