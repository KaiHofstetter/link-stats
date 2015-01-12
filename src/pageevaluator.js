/*global UrlUtils */
var PageEvaluator = {

    evaluatePage: function () {
        var pageStats = {};

        pageStats.selfReferences = (function () {
            var selfReferences = [];
            var hrefElements = document.querySelectorAll("a");

            for (var n = 0; n < hrefElements.length; ++n) {
                if (!UrlUtils.isSelfReference(hrefElements[n].getAttribute("href"))) {
                    selfReferences.push(hrefElements[n].getAttribute("href"));
                }
            }

            return selfReferences;
        })();

        pageStats.totalNumberOfLinks = pageStats.selfReferences.length;

        return pageStats;
    }
};
