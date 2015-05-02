'use strict';

describe('CA4App.filters', function () {
    beforeEach(module('CA4App'));

    describe('checkmark', function () {

        it('should convert boolean values to unicode checkmark or cross',
            inject(function (checkmarkFilter) {
                expect(checkmarkFilter(true)).toBe('\u2713');
                expect(checkmarkFilter(false)).toBe('\u2718');
            }));
    });


    describe('filterXXXX', function () {

        var task3Filter;

        var testArr = ["Abe", "Bille", "Cebra;)", "Dingo", "Elefant", "Alf"];

        beforeEach(module('CA4App'));

        beforeEach(inject(function (task3FilterFilter) {
            task3Filter = task3FilterFilter;
        }))


        it("should work", function () {
            expect(task3Filter(testArr, "a")).toEqual(['Abe', 'Alf']);
        });

        it("dsads", function () {
            expect(task3Filter(testArr, "*").length).toBe(6);
        })


    })
});

