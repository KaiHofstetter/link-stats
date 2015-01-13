/*global UrlUtils */
var PageEvaluator = {

    evaluatePage: function () {
        var pageStats = {};

        pageStats.links = (function () {
            var links = [];
            var hrefElements = document.querySelectorAll("a");

            for (var n = 0; n < hrefElements.length; ++n) {
                if (!UrlUtils.isSelfReference(hrefElements[n].getAttribute("href"))) {
                    if(links.indexOf(hrefElements[n].getAttribute("href"))===-1){
                        links.push(hrefElements[n].getAttribute("href"));
                    }
                }
            }

            return links;
        })();

        pageStats.totalNumberOfLinks = pageStats.links.length;

        return pageStats;
    }
};
