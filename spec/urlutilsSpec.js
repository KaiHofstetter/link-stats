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
});