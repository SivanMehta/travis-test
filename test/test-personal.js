var Browser = require("zombie");
var browser = new Browser({ debug: true });
var assert = require('chai').assert;

function contains(selector, key)
{
    return browser.query(selector).innerHTML.indexOf(key) >= 0; 
}

describe("sivanmehta.github.io", function()
{
    this.timeout(0);

    var url = "http://sivanmehta.github.io/";

    it("should visit my site", function(done)
    {
        browser.visit(url).then(function()
        {
            assert.isTrue(browser.success);
        }).then(done, done);
    });

    it("should see my name", function(done)
    {
        assert.isTrue(contains("h1", "Sivan"));
        done();
    });

    it("should see my picture", function(done)
    {
        assert.isTrue(contains(".row", "me.jpg"));
        done();
    });

    it("should link to my resume", function(done)
    {
        browser.clickLink("a[href ='Sivan_Mehta_Resume.pdf']").then(function()
        {
            assert.isTrue(browser.success);
            done();
        });
    });
});