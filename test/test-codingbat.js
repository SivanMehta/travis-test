var Browser = require("zombie");
var browser = new Browser({ debug: true });
var assert = require('chai').assert;
var codingBat = require("../logic/codingbat.js")

describe("Codingbat exercises", function()
{
    this.timeout(0);

    it("sleepIn", function(done)
    {
        assert.isTrue(sleepIn(true, true));
        assert.isFalse(sleepIn(true, false));
        assert.isTrue(sleepIn(false, true));
        assert.isTrue(sleepIn(false, false));

        done();
    });

    it("missingChar", function(done)
    {
        assert.equal(missingChar('kitten', 1), "ktten");
        assert.equal(missingChar('kitten', 0), "itten");
        assert.equal(missingChar('kitten', 4), "kittn");

        done();
    })
});