/* global PageEvaluator */
describe("PageEvaluator", function () {
    describe("evaluatePage", function () {
        it("should be able to return all external links", function () {

            var anchor = document.createElement("a");
            anchor.href = 'http://www.blablub';
            
            var selfAnchor = document.createElement("a");
            selfAnchor.href = '#blablub';

            document.querySelectorAll = jasmine.createSpy("querySelectorAll spy").and.returnValue([anchor, selfAnchor]);

            var selfReferences = PageEvaluator.evaluatePage();

            expect(selfReferences.links).toContain('http://www.blablub');
            expect(selfReferences.links.length).toBe(1);
        });

        it("should return every link just once", function () {

            var firstAnchor = document.createElement("a");
            firstAnchor.href = 'http://www.blablub';

            var selfAnchor = document.createElement("a");
            selfAnchor.href = '#blablub';

            var secondAnchor = document.createElement("a");
            secondAnchor.href = 'http://www.blablub';

            document.querySelectorAll = jasmine.createSpy("querySelectorAll spy").and.returnValue([firstAnchor, selfAnchor, secondAnchor]);

            var selfReferences = PageEvaluator.evaluatePage();

            expect(selfReferences.links).toContain('http://www.blablub');
            expect(selfReferences.links.length).toBe(1);
        });
    });
});