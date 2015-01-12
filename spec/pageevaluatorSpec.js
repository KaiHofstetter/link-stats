/* global PageEvaluator */
describe("PageEvaluator", function () {
    describe("getSelfReferences", function () {
        it("should be able to return all self references", function () {

            var anchor = document.createElement("a");
            anchor.href = 'http://www.blablub';
            
            var selfAnchor = document.createElement("a");
            selfAnchor.href = '#blablub';

            document.querySelectorAll = jasmine.createSpy("querySelectorAll spy").and.returnValue([anchor, selfAnchor]);

            var selfReferences = PageEvaluator.evaluatePage();

            expect(selfReferences.selfReferences).toContain('http://www.blablub');
            expect(selfReferences.selfReferences.length).toBe(1);
        });
    });
});