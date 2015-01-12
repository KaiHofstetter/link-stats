/*global PageEvaluator */

var page = require('webpage').create();
var system = require('system');
var url = system.args[1];

phantom.injectJs('pageevaluator.js');

page.open(url, function (status) {

    if (status === "success") {
        page.injectJs('urlutils.js');
        var refs = page.evaluate(PageEvaluator.evaluatePage);

        console.log(JSON.stringify(refs, null, 4));
    }
    page.close();
    phantom.exit(0);
});


