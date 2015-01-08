/*global PageEvaluator */

var page = require('webpage').create();
var system = require('system');
var url = system.args[1];

phantom.injectJs('pageevaluator.js');

page.open(url, function (status) {

    if (status === "success") {
        page.injectJs('urlutils.js');
        var refs = page.evaluate(PageEvaluator.getSelfReferences);

        for (var n = 0; n < refs.length; ++n) {
            if (refs[n]) {
                console.log("Found Link: " + refs[n]);
            }
        }
    }
    page.close();
    phantom.exit(0);
});


