/* global UrlUtils */
describe("UrlUtils", function () {
    describe("isSelfReference", function () {
        it("should be able to detect 'http://wwww.yahoo.com' as not a self reference", function () {
            var isSeflRef = UrlUtils.isSelfReference('http://wwww.yahoo.com');
            expect(isSeflRef).toBeFalsy();
        });
    });

    describe("isSelfReference", function () {
        it("should be able to detect '#test' as a self reference", function () {
            var isSeflRef = UrlUtils.isSelfReference('#test');
            expect(isSeflRef).toBeTruthy();
        });
    });

    describe("getDomain", function () {
        it("should be able to extract the domain 'www.blablub.com' from 'https://www.blablub.com/sss", function () {
            var domain = UrlUtils.getDomain('https://www.blablub.com/sss');
            expect(domain).toEqual('www.blablub.com');
        });
    });

    describe("getDomain", function () {
        it("should be able to extract the domain 'www.adfas.org.uk' from 'http://www.adfas.org.uk/ ", function () {
            var domain = UrlUtils.getDomain('http://www.adfas.org.uk/');
            expect(domain).toEqual('www.adfas.org.uk');
        });
    });

    describe("getDomain", function () {
        it("should be able to extract the domain 'sub2.sub1.adfas.org.uk' from 'http://sub2.sub1.adfas.org.uk/", function () {
            var domain = UrlUtils.getDomain('http://sub2.sub1.adfas.org.uk/');
            expect(domain).toEqual('sub2.sub1.adfas.org.uk');
        });
    });
});