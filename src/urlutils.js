var UrlUtils = {
    isSelfReference: function (path) {
        return path.match(/^#/);
    },
    
    getDomain: function (url) {
        var urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        
        var urlGroups = urlRegex.exec(url);

        return urlGroups[2]+'.'+urlGroups[3];
    }
};
