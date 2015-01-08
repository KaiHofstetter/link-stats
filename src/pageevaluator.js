/*global UrlUtils */
var PageEvaluator = {
    getSelfReferences: function () {
        var hrefs = [];
        var hrefElements = document.querySelectorAll("a");

        for (var n = 0; n < hrefElements.length; ++n) {
            if (!UrlUtils.isSelfReference(hrefElements[n].getAttribute("href"))) {
                hrefs.push(hrefElements[n].getAttribute("href"));
            }
        }
        return hrefs;
    }
};
